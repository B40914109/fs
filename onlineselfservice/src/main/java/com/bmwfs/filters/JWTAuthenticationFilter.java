package com.bmwfs.filters;


import com.bmwfs.utils.TokenGenerator;
import org.springframework.http.HttpStatus;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthenticationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            boolean valid = TokenGenerator.validateToken(jwtToken);
            if (valid) {
                filterChain.doFilter(request, response);
            }
        }

        response.setStatus(HttpStatus.UNAUTHORIZED.value());
    }
}
