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
        <h2>Bad Weather</h2>
        <ul>
          {badWeatherActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activityText}</p>
              <button onClick={() => handleDelete(activity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <h2>Good Weather</h2>
        <ul>
          {goodWeatherActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activityText}</p>
              <button onClick={() => handleDelete(activity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (e) {
    console.error(e);
  }
}
