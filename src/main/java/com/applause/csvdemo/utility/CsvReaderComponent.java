package com.applause.csvdemo.utility;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.StandardCharsets;
import java.util.List;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

import org.springframework.boot.autoconfigure.security.StaticResourceLocation;
import org.springframework.stereotype.Component;

@Component
public class CsvReaderComponent {

    private CsvReaderComponent() {}

    //A generic way to load our csv files based on the csv data classes we setup, so we don't need one for each class
    public <T> List<T> readCsvFromResource(String path, Class<T> clazz) throws IOException {
        try (Reader reader = new InputStreamReader(StaticResourceLocation.class.getResourceAsStream(path), StandardCharsets.UTF_8)) {
          CsvToBean<T> csvToBean = new CsvToBeanBuilder<T>(reader).withType(clazz).build();
          return csvToBean.parse();
        } 
      }
}
