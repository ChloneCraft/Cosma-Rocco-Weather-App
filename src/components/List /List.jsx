// eslint-disable-next-line react/prop-types
export default function List({ activities, isGoodWeather }) {
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
            <li key={activity.id}>{activity.activityText}</li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <h2>Good Weather</h2>
        <ul>
          {goodWeatherActivities.map((activity) => (
            <li key={activity.id}>{activity.activityText}</li>
          ))}
        </ul>
      </>
    );
  } catch (e) {
    return [null];
  }
}
