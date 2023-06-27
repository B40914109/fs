package com.bmwfs.configs;

import com.bmwfs.filters.ExceptionHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {




    private static class GlobalPrefixInterceptor implements HandlerInterceptor {

        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            String contextPath = request.getContextPath();
            String requestURI = request.getRequestURI();
//            String newPath = requestURI.replaceFirst(contextPath, "/hil");
            String newPath=requestURI.substring(4);
            request.setAttribute("url-prefix",requestURI.substring(0,4));
            request.getRequestDispatcher(newPath).forward(request, response);
            return false;
        }
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ExceptionHandlerInterceptor())
                .addPathPatterns("/api/**"); // 设置拦截器的路径规则，这里是拦截所有请求

        registry.addInterceptor(new GlobalPrefixInterceptor()).addPathPatterns("/hil/**");
        registry.addInterceptor(new GlobalPrefixInterceptor()).addPathPatterns("/afc/**");
    }
}
