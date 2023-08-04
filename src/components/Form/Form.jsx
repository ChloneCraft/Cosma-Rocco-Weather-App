export default function Form({ handleAddActivity }) {
  function handleSubmitData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddActivity(data);
    event.target.reset();
    document.getElementById("activityInput").focus();
  }
  return (
    <form className="activityForm" onSubmit={handleSubmitData}>
      <h1 className="title">Add new activity</h1>
      <label htmlFor="activityInput">Name:</label>
      <input type="text" id="activityInput" name="activityInput" />
      <label htmlFor="isForGoodWeather">Good-weather activity: </label>
      <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}
