package Edu.Fidenz.Assignment.service.impl;
import Edu.Fidenz.Assignment.dto.WeatherDto;
import Edu.Fidenz.Assignment.service.WeatherService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class WeatherServiceImpl implements WeatherService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String API_KEY = "8bff552a82f3dbf4f3b6e0b6cc5b013b";
    private String[] cityCodesArray;

    //-----final output(weather data list)
    @Getter
    private List<WeatherDto> weatherDataList = new ArrayList<>();


    @PostConstruct
    public void initCityIds() {
        getCityIds(); // this runs right after bean creation
        updateWeatherInfo();
    }

    //get weather information from open weather API
    public WeatherDto getWeatherInfoByCityId(String cityId){

        String url = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId +
                "&units=metric&appid=" + API_KEY;
        String response = restTemplate.getForObject(url, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode node = mapper.readTree(response);

            String city = node.get("name").asText();
            String description = node.get("weather").get(0).get("description").asText();
            double temp = node.get("main").get("temp").asDouble();

            return new WeatherDto(city, description, temp);

        } catch (Exception e) {
            throw new RuntimeException("Failed to parse weather data", e);
        }
    }

    // get cities ids
    public void getCityIds(){
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream input = getClass().getClassLoader().getResourceAsStream("cities.json");

            if (input == null) {
                throw new RuntimeException("cities.json not found in resources");
            }

            JsonNode root = mapper.readTree(input);
            JsonNode listNode = root.get("List");
            List<String> cityCodeList = new ArrayList<>();

            for (JsonNode city : listNode) {
                cityCodeList.add(city.get("CityCode").asText());
            }
            cityCodesArray = cityCodeList.toArray(new String[0]);


        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse cities.json", e);
        }
    }

    @Scheduled(fixedRate = 300000)
    public void updateWeatherInfo(){

          List<WeatherDto> updatedList = new ArrayList<>();
          for (String cityId : cityCodesArray) {
              WeatherDto weatherInfoByCityId = getWeatherInfoByCityId(cityId);
              updatedList.add(weatherInfoByCityId);
          }
          weatherDataList = updatedList;


    }


    @Override
    public List<WeatherDto> getweatherDataList() {
        return weatherDataList;
    }
}
