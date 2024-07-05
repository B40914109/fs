package oss.data.service;

import org.springframework.stereotype.Service;
import oss.data.mapper.UserMapper;
import oss.data.model.User;

@Service

public class UserService {
    private UserMapper userMapper;


    public User getUserById(int id){
        return  userMapper.selectUser(id);
    }

}
