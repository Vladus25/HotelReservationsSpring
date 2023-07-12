package com.Controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Entity.PrenotazioneEntity;
import com.Service.PrenotazioneService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioneController {
	
	@Autowired
    private PrenotazioneService serv;

    @GetMapping("/all")
    public List<PrenotazioneEntity> getGiochi(){
        return serv.getPrenotazioni();
    }
    
    @PostMapping("/add")
    public PrenotazioneEntity aggiungiPrenotazione(@RequestBody PrenotazioneEntity prenotazione) {
        return serv.aggiungiPrenotazione(prenotazione);
    }

    @DeleteMapping("/update/{id}")
    public void eliminaPrenotazione(@PathVariable Integer prenotazioneId) {
        serv.eliminaPrenotazione(prenotazioneId);
    }

    @PutMapping("/delete/{id}")
    public PrenotazioneEntity modificaPrenotazione(@PathVariable Integer prenotazioneId, @RequestBody PrenotazioneEntity prenotazione) {
        prenotazione.setId(prenotazioneId);
        return serv.modificaPrenotazione(prenotazione);
    }
    
    @GetMapping("/date-inizio")
    public List<Date> getDateInizio() {
        return serv.getAllDateInizio();
    }
    
    @GetMapping("/date-fine")
    public List<Date> getDateFine() {
        return serv.getAllDateFine();
    }
    
}
