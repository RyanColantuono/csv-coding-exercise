package com.applause.csvdemo.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.applause.csvdemo.dtos.DeviceDTO;
import com.applause.csvdemo.dtos.TesterBugCountDTO;
import com.applause.csvdemo.services.TesterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/tester")
public class TesterController {

    @Autowired private TesterService testerService;

    @GetMapping(value = "/countries")
    public ResponseEntity<List<String>> findTesterCountries() {
        List<String> countries = new ArrayList<>();
        try {
            countries = testerService.loadAllCountries();
            return new ResponseEntity<>(countries, HttpStatus.OK);
            
        } catch(IOException e) {
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping(value = "/devices")
    public ResponseEntity<List<DeviceDTO>> findTesterDevices() {
        List<DeviceDTO> devices = new ArrayList<>();
        try {
            devices = testerService.loadAllDevices();
            return new ResponseEntity<>(devices, HttpStatus.OK);
            
        } catch(IOException e) {
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/tester-bug-count")
    public ResponseEntity<List<TesterBugCountDTO>> findTesterBugCounts(
        @RequestParam(required=false) List<String> countries,
        @RequestParam(required=false) List<Integer> deviceIds) {
        List<TesterBugCountDTO> testerBugCounts = new ArrayList<>();
        try {
            testerBugCounts = testerService.findTestersByExperience(deviceIds, countries);
            return new ResponseEntity<>(testerBugCounts, HttpStatus.OK);
            
        } catch(IOException e) {
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
