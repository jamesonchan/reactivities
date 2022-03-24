import React from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label, Segment, Icon } from "semantic-ui-react";

interface Props {
  activity: Activity;
  viewActivityHandler: (id: string) => void;
  deleteActivityHandler: (id: string) => void;
}

const ActivityListItem = ({
  activity,
  viewActivityHandler,
  deleteActivityHandler,
}: Props) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {activity.date}
          <Icon name="marker" />
          {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
          onClick={() => viewActivityHandler(activity.id)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
