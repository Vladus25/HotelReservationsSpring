package com.Entity;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "prenotazione")
public class PrenotazioneEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserEntity user;
    
    @OneToOne
    @JoinColumn(name = "id_stanza")
    private StanzaEntity stanza;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_inizio")
    private Date dataInizio;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "data_fine")
    private Date dataFine;

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public UserEntity getUser() {
		return user;
	}


	public void setUser(UserEntity user) {
		this.user = user;
	}


	public StanzaEntity getStanza() {
		return stanza;
	}


	public void setStanza(StanzaEntity stanza) {
		this.stanza = stanza;
	}


	public Date getDataInizio() {
		return dataInizio;
	}


	public void setDataInizio(Date dataInizio) {
		this.dataInizio = dataInizio;
	}


	public Date getDataFine() {
		return dataFine;
	}


	public void setDataFine(Date dataFine) {
		this.dataFine = dataFine;
	}

	public PrenotazioneEntity(Integer id, UserEntity user, StanzaEntity stanza, Date dataInizio, Date dataFine) {
		super();
		this.id = id;
		this.user = user;
		this.stanza = stanza;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
	}


	public PrenotazioneEntity() {
		super();
	}

}