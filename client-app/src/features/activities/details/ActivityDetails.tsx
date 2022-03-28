import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Message } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

const ActivityDetails = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { activity, error, loading } = useAppSelector(
    (state) => state.activityView
  );

  useEffect(() => {
    dispatch(viewActivity(id!));
  }, [id, dispatch]);

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
