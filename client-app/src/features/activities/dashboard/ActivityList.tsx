import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Item,
  Label,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import deleteActivity from "../../../redux/actions/activityActions/activityDeleteAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";

const ActivityList = ({}) => {
  const dispatch = useDispatch();
  const { activities, loading, error } = useAppSelector(
    (state) => state.activityList
  );

  const { success } = useAppSelector((state) => state.activityDelete);

  useEffect(() => {
    dispatch(loadActivityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: ActivityActionType.ACTIVITY_DELETE_RESET });
    if (success) {
      dispatch(loadActivityList());
    }
  }, [dispatch, success]);

  const viewActivityHandler = (id: string) => {
    dispatch(viewActivity(id));
  };

  const deleteActivityHandler = (id: string) => {
    dispatch(deleteActivity(id));
  };

  return (
    <Segment>
      <Loader active={loading} />
      {error && (
        <>
          <Message negative>
            <Message.Header>Oops! error...</Message.Header>
            <p>{error}</p>
          </Message>
        </>
      )}
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/activities/${activity.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => viewActivityHandler(activity.id)}
                />
                <Button
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={() => deleteActivityHandler(activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
