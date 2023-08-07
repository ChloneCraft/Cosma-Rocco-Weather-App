import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List /List";
import WeatherComponent from "./components/Fetch/WeatherComponent";
import useLocalStorageState from "use-local-storage-state";

export let colorForBackground = "lightblue";

export default function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(null);
  const [isData, setIsData] = useState(null);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function setColorForBackground(newColor) {
    colorForBackground = newColor;
    console.log(colorForBackground);
  }

  setColorForBackground(isGoodWeather ? "rgb(238, 238, 30)" : "lightblue");

  function changeWeather(newWeatherStatus) {
    setIsGoodWeather(newWeatherStatus);
    setIsData(true);
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
    setActivities([newActivity, ...activities]);
  }
  return (
    <section style={{ backgroundColor: colorForBackground }}>
      <WeatherComponent
        changeWeather={changeWeather}
        setColorForBackground={setColorForBackground}
      />
      {isData && (
        <List
          activities={activities}
          isGoodWeather={isGoodWeather}
          changeActivities={changeActivities}
        ></List>
      )}
      <Form
        handleAddActivity={handleAddActivity}
        isGoodWeather={isGoodWeather}
      />
    </section>
  );
}
