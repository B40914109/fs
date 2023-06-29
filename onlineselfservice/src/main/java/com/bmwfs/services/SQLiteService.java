package com.bmwfs.services;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SQLiteService {
    private static final Logger logger = LoggerFactory.getLogger(SQLiteService.class);
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public  SQLiteService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate=jdbcTemplate;
    }

    public List<String> getUserNames(){
        String sql="select username from account";
        return  jdbcTemplate.queryForList(sql,String.class);
    }














}
