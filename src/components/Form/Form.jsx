// eslint-disable-next-line react/prop-types
export default function Form({ onAddActivity }) {
  function handleSubmitData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const isForGoodWeather =
      document.getElementById("isForGoodWeather").checked;
    onAddActivity({
      activity: data.activityInput,
      isForGoodWeather: isForGoodWeather,
    });
    event.target.reset();
    document.getElementById("activityInput").focus();
  }

  return (
    <form className="activityForm" onSubmit={handleSubmitData}>
      <h1 className="title">Add new activity</h1>
      <label htmlFor="activityInput">Name:</label>
      <input type="text" id="activityInput" name="activityInput" />
      <label htmlFor="isForGoodWeather">Good-weather activity:</label>
      <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}
