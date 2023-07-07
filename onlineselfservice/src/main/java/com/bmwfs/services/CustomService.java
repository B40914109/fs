package com.bmwfs.services;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

@Service
@ConfigurationProperties(prefix = "your.service")
public class CustomService {
    public  String Tag;

//    public CustomService(){}

//    public CustomService(String tag){
//        this.Tag=tag;
//    }
}
