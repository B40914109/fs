package com.bmwfs.configs;

import com.bmwfs.filters.ExceptionHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ExceptionHandlerInterceptor())
                .addPathPatterns("/api/**"); // 设置拦截器的路径规则，这里是拦截所有请求
    }
}
