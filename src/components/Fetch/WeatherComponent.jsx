import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function WeatherComponent({ changeWeather }) {
  const [weatherData, setWeatherData] = useState({ condition: "Loading..." });

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
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

        if (isMounted) {
          changeWeather(weather.isGoodWeather);
          setWeatherData(weather);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);

    console.log(fetchWeather);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [changeWeather]);

  return (
    <div>
      <h1>Weather Data</h1>
      <ul>{weatherData.location}</ul>
      <ul>{weatherData.condition}</ul>
      <ul>{weatherData.temperature}</ul>
    </div>
  );
}
