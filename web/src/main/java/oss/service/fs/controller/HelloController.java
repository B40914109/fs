package oss.service.fs.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping(value = "/demo", method = RequestMethod.GET)
    public String demo(){
        return  "test. abc..";
    }
}
