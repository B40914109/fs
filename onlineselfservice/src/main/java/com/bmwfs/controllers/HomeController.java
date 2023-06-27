package com.bmwfs.controllers;

import com.bmwfs.services.SQLiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class HomeController extends ApiController {


    @Autowired
    private SQLiteService service;

    @RequestMapping("/home")
    String home() {
        List<String> res = service.getUserNames();
        return res.toString();
    }

    @RequestMapping("/hil/about")
    String about2() {
        return "/hil/About";
    }

    @RequestMapping("/afc/about")
    String about3() {
        return "/afc/About";
    }


    @RequestMapping("/about")
    String about() {
        String tag = (String) this.getUrlPath();
        return "About2* " + tag + " " + this._request.hashCode();
    }
}
