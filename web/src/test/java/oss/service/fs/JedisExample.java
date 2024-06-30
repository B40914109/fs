package oss.service.fs;

import redis.clients.jedis.Jedis;

public class JedisExample {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("localhost");
        System.out.println("连接成功");

        jedis.set("name", "redis");
        System.out.println("存储的字符串：" + jedis.get("name"));
    }
}
