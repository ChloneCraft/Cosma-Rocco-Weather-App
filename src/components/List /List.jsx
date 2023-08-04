import "./List.css";

// eslint-disable-next-line react/prop-types
export default function List({ activities, isGoodWeather, changeActivities }) {
  function handleDelete(id) {
    changeActivities(activities.filter((activity) => activity.id !== id));
  }
  try {
    const goodWeatherActivities = activities.filter(
      (activity) => activity.isForGoodWeather
    );
    const badWeatherActivities = activities.filter(
      (activity) => !activity.isForGoodWeather
    );

    return !isGoodWeather ? (
      <>
        <h2>
          Bad Weather outside! <br /> Here`&apos;`s what you can do:
        </h2>
        <ul>
          {badWeatherActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activityText}</p>
              <button
                className="list-button"
                onClick={() => handleDelete(activity.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <h2>
          The weather is awesome! <br /> Go outside and:
        </h2>
        <ul>
          {goodWeatherActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activityText}</p>
              <button
                className="list-button"
                onClick={() => handleDelete(activity.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (e) {
    console.error(e);
  }
}
