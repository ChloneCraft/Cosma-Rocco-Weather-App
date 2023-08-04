import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List /List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [isGoodWeather, setIsGoodWeather] = useLocalStorageState(
    "isGoodWeather",
    { defaultValue: true }
  );
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

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
      <List activities={activities} isGoodWeather={isGoodWeather}></List>
      <Form handleAddActivity={handleAddActivity} />
    </>
  );
}
