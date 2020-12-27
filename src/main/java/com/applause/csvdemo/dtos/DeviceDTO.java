package com.applause.csvdemo.dtos;

import java.util.Objects;

import com.applause.csvdemo.models.Device;

public class DeviceDTO implements Comparable<DeviceDTO>{
    private Integer deviceId;
    private String description;

    public DeviceDTO() {}

    public DeviceDTO(Device device) {
        this.deviceId = device.getDeviceId();
        this.description = device.getDescription();
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

    @Override
    public int compareTo(DeviceDTO device) {
        return getDescription().toUpperCase().compareTo(device.getDescription().toUpperCase());
    }


    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof DeviceDTO)) {
            return false;
        }
        DeviceDTO deviceDTO = (DeviceDTO) o;
        return Objects.equals(deviceId, deviceDTO.deviceId) && Objects.equals(description, deviceDTO.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(deviceId, description);
    }
  

}
