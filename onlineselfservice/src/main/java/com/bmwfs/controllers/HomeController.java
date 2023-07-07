package com.bmwfs.controllers;

import com.bmwfs.services.CustomService;
import com.bmwfs.services.SQLiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class HomeController extends ApiController {

    @Autowired
    public  HttpServletRequest _request;

    @Autowired
    private SQLiteService service;

    @Autowired
    private CustomService _cs;

    @RequestMapping("/home")
    String home() {
        List<String> res = service.getUserNames();
        return res.toString();
    }



    @RequestMapping("/prefix1/test")
    String about3() {
        String url = (String) this._request.getRequestURI();
        return url + "  " + this.hashCode()   + "  " +_cs.hashCode();
    }

    @RequestMapping("/prefix2/test")
    String about5() {

        String url = (String) this._request.getRequestURI();
        return url + "  " + this.hashCode()   + "  " +_cs.hashCode();

    }

    @RequestMapping("/about")
    String about() {
        String url = (String) this._request.getRequestURI();
        return url + "  " + this.hashCode()   + "  " +_cs.hashCode();
    }

    @RequestMapping("/hil/about")
    String about2() {

        String url = (String) this._request.getRequestURI();
        return url + "  " + this.hashCode()   + "  " +_cs.hashCode();
    }
}
