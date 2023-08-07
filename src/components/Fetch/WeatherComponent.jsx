import { useEffect, useState } from "react";
import "./WeatherComponent.css";

// eslint-disable-next-line react/prop-types
export default function WeatherComponent({
  changeWeather,
  setColorForBackground,
}) {
  const [weatherData, setWeatherData] = useState(null);

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
          // changeWeather(false);
          setWeatherData(weather);
          if (weather.temperature) {
            console.log(weather);
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
