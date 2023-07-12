package com.Entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "stanza")
public class StanzaEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
	@Column(name = "numero_stanza")
	private Integer numeroStanza;
	
	private Integer prezzo;
	
	@Column(name = "n_posti")
	private Integer nPosti;
	
	@ManyToMany
    @JoinTable(
        name = "stanza_servizio",
        joinColumns = @JoinColumn(name = "id_stanza"),
        inverseJoinColumns = @JoinColumn(name = "id_servizio")
    )
    private Set<ServizioEntity> servizio;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNumeroStanza() {
		return numeroStanza;
	}

	public void setNumeroStanza(Integer numeroStanza) {
		this.numeroStanza = numeroStanza;
	}

	public Integer getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(Integer prezzo) {
		this.prezzo = prezzo;
	}

	public Integer getnPosti() {
		return nPosti;
	}

	public void setnPosti(Integer nPosti) {
		this.nPosti = nPosti;
	}

	public Set<ServizioEntity> getServizio() {
		return servizio;
	}

	public void setServizio(Set<ServizioEntity> servizio) {
		this.servizio = servizio;
	}

	public StanzaEntity(Integer id, Integer numeroStanza, Integer prezzo, Integer nPosti,
			Set<ServizioEntity> servizio) {
		super();
		this.id = id;
		this.numeroStanza = numeroStanza;
		this.prezzo = prezzo;
		this.nPosti = nPosti;
		this.servizio = servizio;
	}

	public StanzaEntity() {
		super();
	}

	
}
