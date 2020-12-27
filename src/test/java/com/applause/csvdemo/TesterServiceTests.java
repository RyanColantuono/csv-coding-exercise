package com.applause.csvdemo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.applause.csvdemo.dtos.DeviceDTO;
import com.applause.csvdemo.dtos.TesterBugCountDTO;
import com.applause.csvdemo.models.Bug;
import com.applause.csvdemo.models.Device;
import com.applause.csvdemo.models.Tester;
import com.applause.csvdemo.models.TesterDevice;
import com.applause.csvdemo.services.TesterService;
import com.applause.csvdemo.utility.CsvReaderComponent;
import com.applause.csvdemo.utility.FileConstants;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TesterServiceTests {

    @InjectMocks
    TesterService testerService;

    @Mock
    CsvReaderComponent csvReaderComponent;

    @Test
    void testLoadCountries() throws Exception {

        List<Tester> testers = new ArrayList<>();
        setupTesterMockData(testers);

        List<String> countries = testerService.loadAllCountries();
        assertNotEquals(null, countries);
        assertEquals(3, countries.size());
        assertEquals("GB", countries.get(0));
        assertEquals("JP", countries.get(1));
        assertEquals("US", countries.get(2));
    }

    @Test
    void testLoadDevices() throws Exception {
        List<Device> devices = new ArrayList<>();
        setupDeviceMockData(devices);

        List<DeviceDTO> deviceDTOs = testerService.loadAllDevices();
        assertNotEquals(null, deviceDTOs);
        assertEquals(7, deviceDTOs.size());
        assertEquals("Alpha", deviceDTOs.get(0).getDescription());
        assertEquals("LG3", deviceDTOs.get(4).getDescription());
        assertEquals("Zeta", deviceDTOs.get(6).getDescription());
    }

    @Test
    void testLoadTesterBugCountsNoFilters() throws Exception {
       
        List<Tester> testers = new ArrayList<>();
        List<TesterDevice> testerDevices = new ArrayList<>();
        List<Bug> bugs = new ArrayList<>();
        setupTesterMockData(testers);
        setupTesterDeviceMockData(testerDevices);
        setupBugMockData(bugs);

        List<TesterBugCountDTO> testerBugCountDTOs = testerService.findTestersByExperience(null, null);
        assertNotEquals(null, testerBugCountDTOs);
        assertEquals(4, testerBugCountDTOs.size());
        assertEquals("Shigeru", testerBugCountDTOs.get(0).getFirstName());
        assertEquals(8, testerBugCountDTOs.get(0).getCount());
        assertEquals("John", testerBugCountDTOs.get(1).getFirstName());
        assertEquals(5, testerBugCountDTOs.get(1).getCount());
        assertEquals("Jane", testerBugCountDTOs.get(2).getFirstName());
        assertEquals(4, testerBugCountDTOs.get(2).getCount());
        assertEquals("David", testerBugCountDTOs.get(3).getFirstName());
        assertEquals(2, testerBugCountDTOs.get(3).getCount());
    }

    @Test
    void testLoadTesterBugCountsCountriesFilter() throws Exception {
       
        List<Tester> testers = new ArrayList<>();
        List<TesterDevice> testerDevices = new ArrayList<>();
        List<Bug> bugs = new ArrayList<>();
        setupTesterMockData(testers);
        setupTesterDeviceMockData(testerDevices);
        setupBugMockData(bugs);

        List<String> countries = new ArrayList<>();
        countries.add("US");
        countries.add("JP");

        List<TesterBugCountDTO> testerBugCountDTOs = testerService.findTestersByExperience(null, countries);
        assertNotEquals(null, testerBugCountDTOs);
        assertEquals(3, testerBugCountDTOs.size());
        assertEquals("Shigeru", testerBugCountDTOs.get(0).getFirstName());
        assertEquals(8, testerBugCountDTOs.get(0).getCount());
        assertEquals("John", testerBugCountDTOs.get(1).getFirstName());
        assertEquals(5, testerBugCountDTOs.get(1).getCount());
        assertEquals("Jane", testerBugCountDTOs.get(2).getFirstName());
        assertEquals(4, testerBugCountDTOs.get(2).getCount());
    }

    @Test
    void testLoadTesterBugCountsDevicesFilter() throws Exception {
       
        List<Tester> testers = new ArrayList<>();
        List<TesterDevice> testerDevices = new ArrayList<>();
        List<Bug> bugs = new ArrayList<>();
        setupTesterMockData(testers);
        setupTesterDeviceMockData(testerDevices);
        setupBugMockData(bugs);

        List<Integer> deviceIds = new ArrayList<>();
        deviceIds.add(7);
        deviceIds.add(4);
        
        List<String> countries = new ArrayList<>();
        countries.add("US");
        countries.add("JP");

        List<TesterBugCountDTO> testerBugCountDTOs = testerService.findTestersByExperience(deviceIds, null);
        assertNotEquals(null, testerBugCountDTOs);
        assertEquals(3, testerBugCountDTOs.size());
        assertEquals("Shigeru", testerBugCountDTOs.get(0).getFirstName());
        assertEquals(6, testerBugCountDTOs.get(0).getCount());
        assertEquals("John", testerBugCountDTOs.get(1).getFirstName());
        assertEquals(5, testerBugCountDTOs.get(1).getCount());
        assertEquals("Jane", testerBugCountDTOs.get(2).getFirstName());
        assertEquals(1, testerBugCountDTOs.get(2).getCount());
    }

    
    @Test
    void testLoadTesterBugCountsDevicesCountryFilter() throws Exception {
       
        List<Tester> testers = new ArrayList<>();
        List<TesterDevice> testerDevices = new ArrayList<>();
        List<Bug> bugs = new ArrayList<>();
        setupTesterMockData(testers);
        setupTesterDeviceMockData(testerDevices);
        setupBugMockData(bugs);

        List<Integer> deviceIds = new ArrayList<>();
        deviceIds.add(3);
        deviceIds.add(5);
        deviceIds.add(7);

        List<String> countries = new ArrayList<>();
        countries.add("US");
        countries.add("GB");

        List<TesterBugCountDTO> testerBugCountDTOs = testerService.findTestersByExperience(deviceIds, countries);
        assertNotEquals(null, testerBugCountDTOs);
        assertEquals(3, testerBugCountDTOs.size());
        assertEquals("Jane", testerBugCountDTOs.get(0).getFirstName());
        assertEquals(3, testerBugCountDTOs.get(0).getCount());
        assertEquals("John", testerBugCountDTOs.get(1).getFirstName());
        assertEquals(2, testerBugCountDTOs.get(1).getCount());
        assertEquals("David", testerBugCountDTOs.get(2).getFirstName());
        assertEquals(1, testerBugCountDTOs.get(2).getCount());
    }

    private void setupTesterMockData(List<Tester> testers) throws Exception {
        testers.add(new Tester(1, "Jane", "Doe", "US", LocalDate.now()));
        testers.add(new Tester(2, "John", "Smith", "US", LocalDate.now()));
        testers.add(new Tester(3, "David", "Tennet", "GB", LocalDate.now()));
        testers.add(new Tester(4, "Shigeru", "Miyamoto", "JP", LocalDate.now()));

        when(csvReaderComponent.readCsvFromResource(FileConstants.TESTER_CSV, Tester.class)).thenReturn(testers);
    }
    
    private void setupDeviceMockData(List<Device> devices) throws Exception {
        devices.add(new Device(1, "Nexus 5"));
        devices.add(new Device(2, "iPhone 4"));
        devices.add(new Device(3, "iPhone 5"));
        devices.add(new Device(4, "LG3"));
        devices.add(new Device(5, "iPhone 4S"));
        devices.add(new Device(6, "Alpha"));
        devices.add(new Device(7, "Zeta"));

        when(csvReaderComponent.readCsvFromResource(FileConstants.DEVICES_CSV, Device.class)).thenReturn(devices);
    }

    private void setupTesterDeviceMockData(List<TesterDevice> testerDevices) throws Exception {

        testerDevices.add(new TesterDevice(1, 1));
        testerDevices.add(new TesterDevice(1, 3));
        testerDevices.add(new TesterDevice(1, 7));
        testerDevices.add(new TesterDevice(2, 1));
        testerDevices.add(new TesterDevice(2, 4));
        testerDevices.add(new TesterDevice(2, 7));
        testerDevices.add(new TesterDevice(3, 2));
        testerDevices.add(new TesterDevice(3, 5));
        testerDevices.add(new TesterDevice(4, 3));
        testerDevices.add(new TesterDevice(4, 4));
        testerDevices.add(new TesterDevice(4, 6));
        testerDevices.add(new TesterDevice(4, 7));

        when(csvReaderComponent.readCsvFromResource(FileConstants.TESTER_DEVICES_CSV, TesterDevice.class)).thenReturn(testerDevices);
    }

    private void setupBugMockData(List<Bug> bugs) throws Exception {
   
        bugs.add(new Bug(1, 3, 1));
        bugs.add(new Bug(2, 1, 1));
        bugs.add(new Bug(3, 3, 1));
        bugs.add(new Bug(4, 7, 1));
        bugs.add(new Bug(5, 4, 2));
        bugs.add(new Bug(6, 4, 2));
        bugs.add(new Bug(7, 4, 2));
        bugs.add(new Bug(8, 7, 2));
        bugs.add(new Bug(9, 7, 2));
        bugs.add(new Bug(10, 5, 3));
        bugs.add(new Bug(11, 2, 3));
        bugs.add(new Bug(12, 4, 4));
        bugs.add(new Bug(13, 4, 4));
        bugs.add(new Bug(14, 6, 4));
        bugs.add(new Bug(15, 3, 4));
        bugs.add(new Bug(16, 7, 4));
        bugs.add(new Bug(17, 7, 4));
        bugs.add(new Bug(18, 7, 4));
        bugs.add(new Bug(19, 7, 4));

        when(csvReaderComponent.readCsvFromResource(FileConstants.BUGS_CSV, Bug.class)).thenReturn(bugs);
    }
}
