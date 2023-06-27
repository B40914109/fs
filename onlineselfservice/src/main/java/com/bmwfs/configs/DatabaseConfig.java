package com.bmwfs.configs;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

@Configurable
public class DatabaseConfig {

    @Bean
    public DataSource dataSource(){
        return DataSourceBuilder.create()
                .build();
    }
}
