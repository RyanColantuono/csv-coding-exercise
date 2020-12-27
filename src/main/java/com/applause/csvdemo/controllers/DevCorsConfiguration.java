package com.applause.csvdemo.controllers;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
 * I used this during some of the initial setup when I was using 'ng serve' to start
 * up angular, which was on port 4200. This allows api calls from a different port to hit 
 * the backend server. I have stuff in the pom to build angular out to a seprate folder
 * where this is not necessary when building the jar. This controller is setup with the 
 * spring profile annotation for development, so that you could easily prevent this from running in prod.
 * 
 */
@Configuration
@Profile("development")
public class DevCorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**");
    }
}