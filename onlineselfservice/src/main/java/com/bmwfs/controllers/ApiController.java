package com.bmwfs.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class ApiController {
    @Autowired
    public HttpServletRequest _request;

    public String getUrlPath() {
        return (String) this._request.getAttribute("url-prefix");
    }
}
