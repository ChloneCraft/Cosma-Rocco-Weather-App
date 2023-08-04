import { useEffect, useState } from "react";

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weather = await response.json();

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
      <ul>
        {weatherData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
