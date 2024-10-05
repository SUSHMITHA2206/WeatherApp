package com.java.Weather.Controller;

import com.java.Weather.Model.WeatherResponse;
import com.java.Weather.Services.WeatherServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*")
public class WeatherController {

    @Autowired
    private WeatherServices weatherService;

    @GetMapping("/{city}")
    public ResponseEntity<WeatherResponse> getWeatherByCity(@PathVariable String city) {
        return ResponseEntity.ok(weatherService.getWeatherForCity(city));
    }

    @GetMapping("/forecast/{city}")
    public ResponseEntity<WeatherResponse> getForecastByCity(@PathVariable String city) {
        return ResponseEntity.ok(weatherService.getForecastForCity(city));
    }
}
