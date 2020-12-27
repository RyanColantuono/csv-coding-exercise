package com.applause.csvdemo.models;

import com.opencsv.bean.CsvBindByName;

public class Device {

    @CsvBindByName
    private Integer deviceId;
    
    @CsvBindByName
    private String description;

    public Device(){}

    public Device(Integer deviceId, String description) {
        this.deviceId = deviceId;
        this.description = description;
    }

    public Integer getDeviceId() {
        return this.deviceId;
    }

    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }    
}
