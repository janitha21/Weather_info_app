package Edu.Fidenz.Assignment;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.List;

@SpringBootApplication
@EnableScheduling
public class Application {
    public static void main(String [] args) {
        //ConfigurableApplicationContext context = SpringApplication.run(Application.class);
        SpringApplication.run(Application.class);
        System.out.println("work it m");

       //WeatherServiceImpl trail = context.getBean(WeatherServiceImpl.class);
       // WeatherDto weatherInfoByCityId = trail.getWeatherInfoByCityId("53654");


    }

}
