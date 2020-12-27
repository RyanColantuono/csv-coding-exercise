package com.applause.csvdemo.services;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.applause.csvdemo.utility.CsvReaderComponent;
import com.applause.csvdemo.utility.FileConstants;
import com.applause.csvdemo.dtos.DeviceDTO;
import com.applause.csvdemo.dtos.TesterBugCountDTO;
import com.applause.csvdemo.models.Bug;
import com.applause.csvdemo.models.Device;
import com.applause.csvdemo.models.Tester;
import com.applause.csvdemo.models.TesterDevice;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TesterService {

    @Autowired
    private CsvReaderComponent csvReaderComponent;

    public List<DeviceDTO> loadAllDevices() throws IOException {
        List<Device> devices = csvReaderComponent.readCsvFromResource(FileConstants.DEVICES_CSV, Device.class);
        return devices.stream()
            .map(DeviceDTO::new)
            .sorted()
            .collect(Collectors.toList());
    }

    public List<String> loadAllCountries() throws IOException {
        List<Tester> testers = csvReaderComponent.readCsvFromResource(FileConstants.TESTER_CSV, Tester.class);

        return testers.stream()
        .map(Tester::getCountry)
        .distinct()
        .sorted()
        .collect(Collectors.toList());
    }

    public List<TesterBugCountDTO> findTestersByExperience(List<Integer> deviceIds, List<String> countries) throws IOException {

        List<TesterDevice> testerDevices = csvReaderComponent.readCsvFromResource(FileConstants.TESTER_DEVICES_CSV, TesterDevice.class);
        List<Tester> testers = csvReaderComponent.readCsvFromResource(FileConstants.TESTER_CSV, Tester.class);
        List<Bug> bugs = csvReaderComponent.readCsvFromResource(FileConstants.BUGS_CSV, Bug.class);

        return testers.stream()
        //if user selected countries, filter to testers in those countries
        .filter(CollectionUtils.isEmpty(countries) ? x-> true : tester ->  countries.contains(tester.getCountry()))
        //if user selected devices, filter to devices they have per the tester_device.csv
        .filter(CollectionUtils.isEmpty(deviceIds) ? x-> true : tester ->   
            testerDevices.stream()
            .anyMatch(td -> 
                deviceIds.contains(td.getDeviceId()) && 
                td.getTesterId().equals(tester.getTesterId()))
            )
        .map(tester -> {
        
            long count = bugs.stream()
            .filter(bug-> 
                 //get bug counts for testers, matching on the testerId and only for bugs that match the filtered devices
                bug.getTesterId().equals(tester.getTesterId()) &&
                (CollectionUtils.isEmpty(deviceIds) ?  true : deviceIds.contains(bug.getDeviceId()))
            ).count();

           return new TesterBugCountDTO(tester, count);
        })
        .filter(bugCount -> bugCount.getCount() > 0) //we don't want to see testers that don't have bugs for our search criteria
        .sorted(Comparator.comparingLong(TesterBugCountDTO::getCount).reversed())
        .collect(Collectors.toList());
    }

}
