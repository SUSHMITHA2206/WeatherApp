package com.java.Weather.Services;

import com.java.Weather.Model.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherServices {

    @Value("${openweathermap.api.key}")
    private String apiKey;

    private final String WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={8255f9fec03f2e1eeb4226f4b1ce5125}&units=metric";
    private final String FORECAST_API_URL = "http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={8255f9fec03f2e1eeb4226f4b1ce5125}&units=metric";

    private final RestTemplate restTemplate = new RestTemplate();

    public WeatherResponse getWeatherForCity(String city) {
        return restTemplate.getForObject(WEATHER_API_URL, WeatherResponse.class, city, apiKey);
    }

    public WeatherResponse getForecastForCity(String city) {
        return restTemplate.getForObject(FORECAST_API_URL, WeatherResponse.class, city, apiKey);
    }
}
