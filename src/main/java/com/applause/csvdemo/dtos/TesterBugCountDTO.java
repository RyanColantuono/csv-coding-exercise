package com.applause.csvdemo.dtos;

import com.applause.csvdemo.models.Tester;

import org.apache.commons.lang3.StringUtils;

public class TesterBugCountDTO {
    
    private Integer testerId;
    private String firstName;
    private String lastName;
    private long count;

    public TesterBugCountDTO() {}

    public TesterBugCountDTO(Tester tester, long count) {
        this.testerId = tester.getTesterId();
        this.firstName = tester.getFirstName();
        this.lastName = tester.getLastName();
        this.count = count;
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

    public long getCount() {
        return this.count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    public Integer getTesterId() {
        return this.testerId;
    }

    public void setTesterId(Integer testerId) {
        this.testerId = testerId;
    }

    public String getFullName() {
        return (StringUtils.isEmpty(getFirstName()) ? getLastName() : getFirstName() + " " + getLastName()).trim();
    }

}
