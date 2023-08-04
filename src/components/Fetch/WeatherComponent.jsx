import { useEffect, useState } from "react";

export default function WeatherComponent({ changeWeather }) {
  const [weatherData, setWeatherData] = useState({ condition: "Loading..." });

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!response.ok) {
          setWeatherData("Loading...");
          throw new Error("Failed to fetch weather data");
        }
        const weather = await response.json();
        console.log(weather);
        changeWeather(weather.isGoodWeather);
        setWeatherData(weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    startFetching();
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      <ul>{weatherData.location}</ul>
      <ul>{weatherData.condition}</ul>
      <ul>{weatherData.temperature}</ul>
    </div>
  );
}
