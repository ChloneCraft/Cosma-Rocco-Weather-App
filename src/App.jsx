import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List /List";
import WeatherComponent from "./components/Fetch/WeatherComponent";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function changeWeather(newWeatherStatus) {
    setIsGoodWeather(newWeatherStatus);
  }
  function changeActivities(newArray) {
    setActivities(newArray);
  }

  function handleAddActivity({ activityInput, isForGoodWeather }) {
    const newActivity = {
      id: uid(),
      activityText: activityInput,
      isForGoodWeather: isForGoodWeather,
    };
    console.log(activities);
    setActivities([...activities, newActivity]);
  }
  return (
    <>
      <List
        activities={activities}
        isGoodWeather={isGoodWeather}
        changeActivities={changeActivities}
      ></List>
      <Form handleAddActivity={handleAddActivity} />
      <WeatherComponent changeWeather={changeWeather} />
    </>
  );
}
