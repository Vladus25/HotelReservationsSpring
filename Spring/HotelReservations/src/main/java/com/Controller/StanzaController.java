package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.StanzaEntity;
import com.Service.StanzaService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/stanze")
public class StanzaController {
	
	@Autowired
    private StanzaService serv;

    @GetMapping("/all")
    public List<StanzaEntity> getAllStanze(){
        return serv.getAllStanze();
    }
}	
