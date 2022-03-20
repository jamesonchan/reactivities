import React from "react";
import { Grid } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

const ActivityDashboard = () => {
  const { formOpen } = useAppSelector((state) => state.formOpen);

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityDetails />
        {formOpen ? <ActivityForm /> : <></>}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
