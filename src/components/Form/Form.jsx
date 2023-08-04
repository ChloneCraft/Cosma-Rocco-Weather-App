import "./Form.css";
// eslint-disable-next-line react/prop-types
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
      <h2 className="activityForm__title">Add new activity:</h2>
      <div className="activityForm__activityBar">
        <label htmlFor="activityInput">Name:</label>
        <input type="text" id="activityInput" name="activityInput" />
      </div>
      <div className="activityForm__activityBar">
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      </div>
      <button className="activityForm__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
