package com.applause.csvdemo.models;

import com.opencsv.bean.CsvBindByName;

public class Bug {
    
    @CsvBindByName
    private Integer bugId;
    
    @CsvBindByName
    private Integer deviceId;

    @CsvBindByName
    private Integer testerId;

    public Bug(){}
    
    public Bug(Integer bugId, Integer deviceId, Integer testerId) {
        this.bugId = bugId;
        this.deviceId = deviceId;
        this.testerId = testerId;
    }

    public Integer getBugId() {
        return this.bugId;
    }

    public void setBugId(Integer bugId) {
        this.bugId = bugId;
    }

    public Integer getDeviceId() {
        return this.deviceId;
    }

    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    public Integer getTesterId() {
        return this.testerId;
    }

    public void setTesterId(Integer testerId) {
        this.testerId = testerId;
    }

}
