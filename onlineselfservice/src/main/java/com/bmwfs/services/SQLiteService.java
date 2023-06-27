package com.bmwfs.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SQLiteService {
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
