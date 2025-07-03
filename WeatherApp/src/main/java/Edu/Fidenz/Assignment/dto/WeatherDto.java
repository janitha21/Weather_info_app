package Edu.Fidenz.Assignment.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
public class WeatherDto {
    private String cityName;
    private String weatherDescription;
    private double temperature;
    private LocalDateTime timestamp;  // ✅ New field

    // constructor
    public WeatherDto(String cityName, String weatherDescription, double temperature) {
        this.cityName = cityName;
        this.weatherDescription = weatherDescription;
        this.temperature = temperature;
        this.timestamp = LocalDateTime.now();
    }

}
