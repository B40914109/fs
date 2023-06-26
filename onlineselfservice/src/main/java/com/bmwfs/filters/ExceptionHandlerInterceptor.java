package com.bmwfs.filters;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ExceptionHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 在请求处理之前执行的逻辑
        return true; // 返回 true 表示继续执行请求，返回 false 表示拦截请求
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // 请求处理之后，在渲染视图之前执行的逻辑
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 请求完成后执行的逻辑，包括渲染视图完成，响应已经返回到客户端
        if (ex != null) {
            // 在这里处理异常
            // 可以根据具体需求进行不同的异常处理操作，如记录日志、返回统一的错误响应等
            // 以下为示例，将异常信息写入响应中
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // 设置响应状态码
            response.getWriter().write("Internal Server Error: " + ex.getMessage()); // 将异常信息写入响应
        }
    }
}
