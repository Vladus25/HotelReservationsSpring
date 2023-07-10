package com.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.PrenotazioneEntity;
import com.Repository.PrenotazioneRepository;

@Service
public class PrenotazioneService {
	
	@Autowired
    private PrenotazioneRepository repo;

    public List<PrenotazioneEntity> getPrenotazioni(){
        return repo.findAll();
    }
    
    public PrenotazioneEntity aggiungiPrenotazione(PrenotazioneEntity prenotazione) {
        return repo.save(prenotazione);
    }

    public void eliminaPrenotazione(Integer prenotazioneId) {
        repo.deleteById(prenotazioneId);
    }

    public PrenotazioneEntity modificaPrenotazione(PrenotazioneEntity prenotazione) {
        return repo.save(prenotazione);
    }
    
    public List<String> getAllPrenotazioniDate() {
		List<PrenotazioneEntity> prenotazioni = repo.findAll();
		return prenotazioni.stream()
			.map(PrenotazioneEntity::getData)
			.map(date -> date.toString()) // Converte la data in formato stringa se necessario
			.collect(Collectors.toList());
	}
}

