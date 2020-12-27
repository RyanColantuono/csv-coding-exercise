package com.applause.csvdemo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import com.applause.csvdemo.models.Bug;
import com.applause.csvdemo.models.Device;
import com.applause.csvdemo.models.Tester;
import com.applause.csvdemo.models.TesterDevice;
import com.applause.csvdemo.utility.CsvReaderComponent;
import com.applause.csvdemo.utility.FileConstants;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CsvReaderComponentTests {
    
    @Autowired
    private CsvReaderComponent csvReaderComponent;

    @Test
    void loadTesters() throws Exception {
        List<Tester> testers = csvReaderComponent.readCsvFromResource(FileConstants.TESTER_CSV, Tester.class);
        assertNotEquals(null, testers);
        assertEquals(9, testers.size());
        assertEquals(1, testers.get(0).getTesterId());
        assertEquals("Miguel", testers.get(0).getFirstName());
        assertEquals("Bautista", testers.get(0).getLastName());
        assertEquals("US", testers.get(0).getCountry());
    }

    @Test
    void loadDevices() throws Exception {
        List<Device> devices = csvReaderComponent.readCsvFromResource(FileConstants.DEVICES_CSV, Device.class);
        assertNotEquals(null, devices);
        assertEquals(10, devices.size());
        assertEquals(1, devices.get(0).getDeviceId());
        assertEquals("iPhone 4", devices.get(0).getDescription());
    }

    @Test
    void loadTesterDevices() throws Exception {
        List<TesterDevice> testerDevices = csvReaderComponent.readCsvFromResource(FileConstants.TESTER_DEVICES_CSV, TesterDevice.class);
        assertNotEquals(null, testerDevices);
        assertEquals(36, testerDevices.size());
        assertEquals(1, testerDevices.get(0).getTesterId());
        assertEquals(1, testerDevices.get(0).getDeviceId());
    }

    @Test
    void loadBugs() throws Exception {
        List<Bug> bugs = csvReaderComponent.readCsvFromResource(FileConstants.BUGS_CSV, Bug.class);
        assertNotEquals(null, bugs);
        assertEquals(1000,  bugs.size());
        assertEquals(1, bugs.get(0).getBugId());
        assertEquals(4, bugs.get(0).getTesterId());
        assertEquals(1,  bugs.get(0).getDeviceId());
    }
}
