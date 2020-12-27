package com.applause.csvdemo.models;

import com.opencsv.bean.CsvBindByName;

public class TesterDevice {

    @CsvBindByName
    private Integer testerId;

    @CsvBindByName
    private Integer deviceId;

    public TesterDevice() {}

    public TesterDevice(Integer testerId, Integer deviceId) {
        this.testerId = testerId;
        this.deviceId = deviceId;
    }

    public Integer getTesterId() {
        return this.testerId;
    }

    public void setTesterId(Integer testerId) {
        this.testerId = testerId;
    }

    public Integer getDeviceId() {
        return this.deviceId;
    }

    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }
}
