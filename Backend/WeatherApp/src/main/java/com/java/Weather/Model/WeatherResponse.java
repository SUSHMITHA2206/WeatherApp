package com.java.Weather.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WeatherResponse {
    private MainData main;
    private List<Weather> weather;
    private String name;
    private List<ForecastItem> list;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class MainData {
        private double temp;
        private double feels_like;
        private int humidity;
        private double temp_min;
        private double temp_max;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Weather {
        private String main;
        private String description;
        private String icon;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ForecastItem {
        private long dt;
        private MainData main;
        private List<Weather> weather;
    }
}