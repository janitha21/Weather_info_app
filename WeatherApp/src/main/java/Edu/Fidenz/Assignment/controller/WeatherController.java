package Edu.Fidenz.Assignment.controller;

import Edu.Fidenz.Assignment.dto.WeatherDto;
import Edu.Fidenz.Assignment.service.WeatherService;
import Edu.Fidenz.Assignment.service.impl.WeatherServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/city")
public class WeatherController {
    private final WeatherService weatherService;

    //get all cities data
    @CrossOrigin
    @GetMapping("/get-all")
    public List<WeatherDto> getWeatherInfo(){
        List<WeatherDto> weatherDtos =weatherService.getweatherDataList();

        return weatherDtos;
    }
}
