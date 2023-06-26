package com.bmwfs.filters;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.GZIPOutputStream;
import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.util.zip.GZIPOutputStream;

public class GzipResponseFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String acceptEncoding = request.getHeader("Accept-Encoding");

        if (acceptEncoding != null && acceptEncoding.contains("gzip")) {
            GzipResponseWrapper gzipResponseWrapper = new GzipResponseFilter() ();

            filterChain.doFilter((request, gzipResponseWrapper);

            byte[] responseBytes = gzipResponseWrapper.getResponseBytes();

            response.setHeader("Content-Encoding", "gzip");
            response.setContentLength(gzipResponseWrapper.getCompressedContentLength());

            try (ServletOutputStream outputStream = response.getOutputStream();
                 GZIPOutputStream gzipOutputStream = new GZIPOutputStream(outputStream)) {
                gzipOutputStream.write(responseBytes);
                gzipOutputStream.flush();
            }
        } else {
            filterChain.doFilter(request, response);
        }
    }


    public class GzipResponseWrapper extends HttpServletResponseWrapper {

        private ByteArrayOutputStream outputStream;
        private GzipServletOutputStream gzipOutputStream;

        public GzipResponseWrapper(HttpServletResponse response) throws IOException {
            super(response);
            outputStream = new ByteArrayOutputStream();
            gzipOutputStream = new GzipServletOutputStream(outputStream);
        }

        @Override
        public ServletOutputStream getOutputStream() throws IOException {
            return gzipOutputStream;
        }

        public byte[] getResponseBytes() {
            try {
                gzipOutputStream.flush();
                return outputStream.toByteArray();
            } catch (IOException e) {
                // 处理异常
                return new byte[0];
            }
        }

        public int getCompressedContentLength() {
            return outputStream.size();
        }
    }

    public class GzipServletOutputStream extends  javax.servlet.ServletOutputStream {

        private GZIPOutputStream gzipOutputStream;

        public GzipServletOutputStream(ByteArrayOutputStream outputStream) throws IOException {
            this.gzipOutputStream = new GZIPOutputStream(outputStream);
        }

        @Override
        public void write(int b) throws IOException {
            gzipOutputStream.write(b);
        }

        @Override
        public void flush() throws IOException {
            gzipOutputStream.flush();
        }

        @Override
        public void close() throws IOException {
            gzipOutputStream.close();
        }

        @Override
        public boolean isReady() {
            return false;
        }

        @Override
        public void setWriteListener(WriteListener writeListener) {

        }
    }
}
