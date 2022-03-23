import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Loader, Message } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";

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
                as={Link}
                to={`/manage/${activity.id}`}
              />
              <Button
                basic
                color="grey"
                content="Cancel"
                as={Link}
                to="/activities"
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

export default ActivityDetails;
