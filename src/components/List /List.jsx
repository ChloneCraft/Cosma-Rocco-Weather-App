// eslint-disable-next-line react/prop-types
export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.activityText}</li>
      ))}
    </ul>
  );
}
