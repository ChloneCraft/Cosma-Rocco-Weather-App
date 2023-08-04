import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List /List";

export default function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [activities, setActivities] = useState([]);

  function handleAddActivity({ activityInput, isForGoodWeather }) {
    const goodWeatherActivities = activities.filter(
      (activity) => activity.isForGoodWeather
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
      <List activities={activities}></List>
      <Form handleAddActivity={handleAddActivity} />
    </>
  );
}
