package com.bmwfs.configs;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.DispatcherServlet;

@Configuration
//@EnableAutoConfiguration(exclude = DispatcherServletAutoConfiguration.class)
public class MultipleDispatcherServletConfig {

//    @Bean
//    public ServletRegistrationBean<?>[] servletRegistrationBeans() {
//        DispatcherServlet dispatcherServlet1 = new DispatcherServlet();
//        ServletRegistrationBean<DispatcherServlet> registrationBean1 = new ServletRegistrationBean<>(dispatcherServlet1, "/prefix1/*");
//        registrationBean1.setName("dispatcherServlet1******");
//
//        DispatcherServlet dispatcherServlet2 = new DispatcherServlet();
//        ServletRegistrationBean<DispatcherServlet> registrationBean2 = new ServletRegistrationBean<>(dispatcherServlet2, "/prefix2/*");
//        registrationBean2.setName("dispatcherServlet2******");
//
//
//        ServletRegistrationBean<?>[] servletRegistrationBeans = {registrationBean1, registrationBean2};
//        return servletRegistrationBeans;
//    }

    @Bean
    public static DispatcherServlet dispatcherServlet1() {
        return new DispatcherServlet();
    }

    @Bean
    public ServletRegistrationBean<DispatcherServlet> dispatcherServletRegistration1() {
        ServletRegistrationBean<DispatcherServlet> registrationBean =
                new ServletRegistrationBean<>(dispatcherServlet1(), "/prefix1/*");
        registrationBean.setName("dispatcherServlet1");
        return registrationBean;
    }

    @Bean
    public static DispatcherServlet dispatcherServlet2() {
        return new DispatcherServlet();
    }

    @Bean
    public ServletRegistrationBean<DispatcherServlet> dispatcherServletRegistration2() {
        ServletRegistrationBean<DispatcherServlet> registrationBean =
                new ServletRegistrationBean<>(dispatcherServlet2(), "/prefix2/*");
        registrationBean.setName("dispatcherServlet2");
        return registrationBean;
    }


}
