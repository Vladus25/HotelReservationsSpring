package com.Service;

import java.util.Date;
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

    public List<PrenotazioneEntity> getAllPrenotazioni(){
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
    
    public List<Date> getAllDateInizio() {
        List<PrenotazioneEntity> prenotazioni = repo.findAll();
        return prenotazioni.stream()
            .map(PrenotazioneEntity::getDataInizio)
            .collect(Collectors.toList());
    }

    public List<Date> getAllDateFine() {
        List<PrenotazioneEntity> prenotazioni = repo.findAll();
        return prenotazioni.stream()
            .map(PrenotazioneEntity::getDataFine)
            .collect(Collectors.toList());
    }

}

