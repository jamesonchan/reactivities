import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  console.log(activities);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data } = await axios.get("/api/activities");
      setActivities(data);
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
