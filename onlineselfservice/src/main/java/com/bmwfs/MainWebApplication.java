package com.bmwfs;

import com.bmwfs.configs.MultipleDispatcherServletConfig;
import com.bmwfs.utils.TokenGenerator;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.context.WebServerInitializedEvent;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.DispatcherServlet;

@RestController
@SpringBootApplication
public class MainWebApplication {

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

//    @Bean
//    public ApplicationRunner runner(BeanFactory beafFactory){
//        return  args -> {
//            System.out.println("hello*********************"+beafFactory.getClass().getName());
//        };
//    }

    public static void main(String[] args) {

        SpringApplication.run(MainWebApplication.class, args);

//        WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext, "dispatcherServlet1");

        // 获取DispatcherServlet实例
        DispatcherServlet dispatcherServlet = (DispatcherServlet) MultipleDispatcherServletConfig.dispatcherServlet1();
//
//        // 获取DispatcherServlet的上下文
        ApplicationContext applicationContext = dispatcherServlet.getWebApplicationContext();
//
//        // 输出上下文中的bean实例
//        String[] beanNames = applicationContext.getBeanDefinitionNames();
//        for (String beanName : beanNames) {
//            System.out.println("Bean Name: " + beanName);
//            Object bean = applicationContext.getBean(beanName);
//            System.out.println("Bean Instance: " + bean);
//        }
    }

//    @EventListener(WebServerInitializedEvent.class)
//    public void onWebServerReady(WebServerInitializedEvent event){
//        System.out.println();
//        System.out.println("当前 WebServer 实现类为： "+event.getWebServer().getClass().getName());
//        System.out.println();
//    }

}