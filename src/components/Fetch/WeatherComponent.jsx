import { useEffect, useState } from "react";
import "./WeatherComponent.css";

// eslint-disable-next-line react/prop-types
export default function WeatherComponent({ changeWeather }) {
  const [weatherData, setWeatherData] = useState(null);
  // const [temperatureDisplay, setTemperatureDisplay] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!response.ok) {
          setWeatherData("Loading...");
          setTemperatureDisplay("Loading...");
          throw new Error("Failed to fetch weather data");
        }

        const weather = await response.json();

        if (isMounted) {
          changeWeather(weather.isGoodWeather);
          setWeatherData(weather);
          if (weather.temperature) {
            console.log(weather);
            // setTemperatureDisplay(weatherData.temperature + "°C");
          }
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [changeWeather]);

  if (!weatherData) {
    return (
      <div className="weatherBox">
        <ul className="temperature">Loading...</ul>
      </div>
    );
  }

  return (
    <div className="weatherBox">
      <ul className="emoji">{weatherData.condition}</ul>
      <ul className="temperature">{`${weatherData.temperature} °C`}</ul>
    </div>
  );
}
