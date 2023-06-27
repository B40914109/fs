package com.bmwfs.controllers;

import com.bmwfs.services.SQLiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private SQLiteService service;

    @RequestMapping("/home/index")
    String home() {
        List<String> res = service.getUserNames();
        return res.toString();
    }
}
