import com.google.gson.Gson;
import oss.data.model.User;

public class JsonSerializeExample {
    public static void main(String[] args) {
        Gson gson = new Gson();

        User usr = new User();
        usr.setId(1);
        usr.setName("hello");

        String jsonString = gson.toJson(usr);
        System.out.println("JSON String:" + jsonString);
    }
}
