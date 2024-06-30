package oss.data.mapper;

import org.apache.ibatis.annotations.Select;
import oss.data.model.User;

import java.util.List;

public interface UserMapper {

    @Select("select * from user where id=#{id}")
    User selectUser(int id);

    @Select("select * from user")
    List<User> selectAllUsers();
}
