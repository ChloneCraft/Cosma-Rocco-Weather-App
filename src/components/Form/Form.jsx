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
    <form className="activity-form" onSubmit={handleSubmitData}>
      <h2 className="activity-form__title">Add new activity:</h2>
      <div className="activity-form__new-activity">
        <label htmlFor="activityInput"></label>
        <input
          type="text"
          id="activityInput"
          name="activityInput"
          minLength="3"
          maxLength="20"
          placeholder="Type here..."
        />
      </div>
      <div className="activity-form__activity-bar">
        <label htmlFor="isForGoodWeather" className="checkbox-label">
          Good-weather activity:
        </label>
        <input
          className="checkbox"
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
        />
      </div>
      <button className="activity-form__submit-button" type="submit">
        Add
      </button>
    </form>
  );
}
