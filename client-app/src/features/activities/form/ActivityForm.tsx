import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import { closeForm } from "../../../redux/actions/formActions/formOpenAction";
import { v4 as uuid } from "uuid";
import createActivity from "../../../redux/actions/activityActions/activityCreateAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";

const ActivityForm = () => {
  const dispatch = useDispatch();
  const { activity: selectedActivity } = useAppSelector(
    (state) => state.activityView
  );
  const { success } = useAppSelector((state) => state.activityCreate);
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if (success) {
      dispatch(loadActivityList());
    }
  }, [dispatch, success]);

  const formCloseHandler = () => {
    dispatch(closeForm());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      [name]: value,
      id: uuid(),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedActivity) {
      dispatch(createActivity(activity));
      dispatch(closeForm());
    }else{
      // dispatch edit activity
    }
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Title"
          name="title"
          value={activity.title}
          onChange={handleChange}
        />
        <Form.TextArea
          placeholder="Description"
          name="description"
          value={activity.description}
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Category"
          name="category"
          value={activity.category}
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Date"
          name="date"
          value={activity.date}
          onChange={handleChange}
        />
        <Form.Input
          placeholder="City"
          name="city"
          value={activity.city}
          onChange={handleChange}
        />
        <Form.Input
          placeholder="Venue"
          name="venue"
          value={activity.venue}
          onChange={handleChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={formCloseHandler}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
