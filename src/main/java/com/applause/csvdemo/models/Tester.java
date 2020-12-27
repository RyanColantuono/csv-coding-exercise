package com.applause.csvdemo.models;

import java.time.LocalDate;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvDate;

public class Tester {
    
    @CsvBindByName
    private Integer testerId;
    
    @CsvBindByName
    private String firstName;

    @CsvBindByName
    private String lastName;

    @CsvBindByName
    private String country;

    @CsvDate(value = "yyyy-MM-dd HH:mm:ss")
    @CsvBindByName
    private LocalDate lastLogin;

    public Tester() {}

    public Tester(Integer testerId, String firstName, String lastName, String country, LocalDate lastLogin) {
        this.testerId = testerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.lastLogin = lastLogin;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setLastLogin(LocalDate lastLogin) {
        this.lastLogin = lastLogin;
    }

    public Tester firstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public Tester lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public Tester country(String country) {
        this.country = country;
        return this;
    }

    public LocalDate getLastLogin() {
        return this.lastLogin;
    }

    public Integer getTesterId() {
        return this.testerId;
    }

    public void setTesterId(Integer testerId) {
        this.testerId = testerId;
    }
    

}
