import React from "react";
import { Grid, Message } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

const ActivityDetails = () => {
  const { activity, error, loading } = useAppSelector(
    (state) => state.activityView
  );

  return (
    <>
      {error ? (
        <>
          <Message negative>
            <Message.Header>Oops! error...</Message.Header>
            <p>{error}</p>
          </Message>
        </>
      ) : activity ? (
        <Grid>
          <Grid.Column width={10}>
            <ActivityDetailHeader activity={activity} />
            <ActivityDetailInfo activity={activity} />
            <ActivityDetailChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <ActivityDetailSidebar />
          </Grid.Column>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActivityDetails;
