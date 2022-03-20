import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Icon, Image, Loader, Message } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import { openForm } from "../../../redux/actions/formActions/formOpenAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";

const ActivitiesDetails = () => {
  const dispatch = useDispatch();
  const { activity, error, loading } = useAppSelector(
    (state) => state.activityView
  );

  const cancelViewActivity = () => {
    dispatch({ type: ActivityActionType.ACTIVITY_VIEW_RESET });
  };

  const formOpenHandler = () => {
    dispatch(openForm());
  };
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
        <Card fluid>
          <Loader active={loading} />
          <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
          <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
              <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>{activity.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths="2">
              <Button
                basic
                color="blue"
                content="Edit"
                onClick={formOpenHandler}
              />
              <Button
                basic
                color="grey"
                content="Cancel"
                onClick={cancelViewActivity}
              />
            </Button.Group>
          </Card.Content>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActivitiesDetails;
