package com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.StanzaEntity;
import com.Repository.StanzaRepository;

@Service
public class StanzaService {
	@Autowired
    private StanzaRepository repo;

    public List<StanzaEntity> getAllStanze(){
        return repo.findAll();
    }
}
