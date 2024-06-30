import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import oss.data.mapper.UserMapper;
import oss.data.model.User;

import java.io.IOException;
import java.io.Reader;

public class MybatisExample {

    private static final Logger logger = LoggerFactory.getLogger(MybatisExample.class);

    public static void main(String[] args) {
        System.out.println("hello world");
        logger.info("hello ");

        String resource="mybatis.config.xml";
        Reader reader;
        try {
            reader= Resources.getResourceAsReader(resource);
            SqlSessionFactory factory=new SqlSessionFactoryBuilder().build(reader);
            try(SqlSession session=factory.openSession()) {
                UserMapper mapper=session.getMapper(UserMapper.class);

                User usr=mapper.selectUser(2);
                System.out.println(usr.getName());
            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
