import "./App.css";
import Form from "./components/Form/Form.jsx";

export default function App() {
  function onAddActivity({ activityInput, isForGoodWeather }) {
    console.log(
      "activityInput:",
      activityInput,
      "isForGoodWeather:",
      isForGoodWeather
    );
  }
  return (
    <>
      <Form onAddActivity={onAddActivity} />
    </>
  );
}
