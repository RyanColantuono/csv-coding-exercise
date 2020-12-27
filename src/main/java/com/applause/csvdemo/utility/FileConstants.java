package com.applause.csvdemo.utility;


import java.io.InputStream;

import org.springframework.boot.autoconfigure.security.StaticResourceLocation;

public final class FileConstants {
    private FileConstants() {}

    public static final String TESTER_CSV = "/csvFiles/testers.csv";
    public static final String DEVICES_CSV = "/csvFiles/devices.csv";
    public static final String TESTER_DEVICES_CSV = "/csvFiles/tester_device.csv";
    public static final String BUGS_CSV = "/csvFiles/bugs.csv";

    public static InputStream getInputStream(String location) {
        return StaticResourceLocation.class.getResourceAsStream(location);
    }
}