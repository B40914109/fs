package com.bmwfs.configs;

import com.bmwfs.filters.JWTAuthenticationFilter;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.web.servlet.FilterRegistrationBean;

@Configurable
public class FilterConfig {

    public FilterRegistrationBean<JWTAuthenticationFilter> jwtFilter(){
        FilterRegistrationBean<JWTAuthenticationFilter> registrationBean=new FilterRegistrationBean<>();
        registrationBean.setFilter((new JWTAuthenticationFilter()));
        registrationBean.addUrlPatterns("/api/*");
        return  registrationBean;
    }

}
