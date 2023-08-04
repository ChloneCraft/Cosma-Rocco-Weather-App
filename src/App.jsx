import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity({ activityInput, isForGoodWeather }) {
    console.log(
      "activityInput:",
      activityInput,
      "isForGoodWeather:",
      isForGoodWeather
    );
    const newActivity = {
      id: uid(),
      activityText: activityInput,
      isForGoodWeather: isForGoodWeather,
    };
    setActivities([...activities, newActivity]);
  }
  return (
    <>
      <Form handleAddActivity={handleAddActivity} />
    </>
  );
}
