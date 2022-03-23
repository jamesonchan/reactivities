import React from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label } from "semantic-ui-react";

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
  );
};

export default ActivityListItem;
