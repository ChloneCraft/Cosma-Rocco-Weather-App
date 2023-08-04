import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List /List";

export default function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity({ activityInput, isForGoodWeather }) {
    const newActivity = {
      id: uid(),
      activityText: activityInput,
      isForGoodWeather: isForGoodWeather,
    };
    setActivities([...activities, newActivity]);
  }
  return (
    <>
      <List activities={activities}></List>
      <Form handleAddActivity={handleAddActivity} />
    </>
  );
}
