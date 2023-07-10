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

    @Temporal(TemporalType.DATE)
    private Date data;

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

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public PrenotazioneEntity(Integer id, UserEntity user, Date data) {
		super();
		this.id = id;
		this.user = user;
		this.data = data;
	}

	public PrenotazioneEntity() {
		super();
	}

    

}