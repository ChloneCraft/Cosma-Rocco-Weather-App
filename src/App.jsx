import "./App.css";
import Form from "./components/Form/Form.jsx";

export default function App() {
  function onAddActivity(data) {
    console.log(
      "activityInput:",
      data.activity,
      "isForGoodWeather:",
      data.isForGoodWeather
    );
  }
  return (
    <>
      <Form onAddActivity={onAddActivity} />
    </>
  );
}
