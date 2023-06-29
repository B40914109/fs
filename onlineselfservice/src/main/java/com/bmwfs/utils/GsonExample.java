package com.bmwfs.utils;

import com.google.gson.Gson;
import lombok.Getter;
import lombok.Setter;

public class GsonExample {
    public static void main(String[] args) {
        Person person=new Person("John Doe",30);

        Gson gson=new Gson();

        String jsonString=gson.toJson(person);
        System.out.println(jsonString);

        String js= "{\"name\":\"John Doe\",\"age\":30}";
        Person p=gson.fromJson(js,Person.class);

        System.out.println(p.getName());
    }
}

@Getter
@Setter
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
