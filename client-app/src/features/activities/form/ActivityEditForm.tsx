import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import editActivity from "../../../redux/actions/activityActions/activityEditAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";

const ActivityEditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const initialState = {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState<Activity>(initialState);
  const { activity: selectedActivity } = useAppSelector(
    (state) => state.activityView
  );

  const { success: successEdit, loading: loadingEdit } = useAppSelector(
    (state) => state.activityEdit
  );

  useEffect(() => {
    dispatch({ type: ActivityActionType.ACTIVITY_EDIT_RESET });
    if (successEdit) {
      dispatch(loadActivityList());
    }
  }, [dispatch, successEdit]);

  useEffect(() => {
    if (id && id === selectedActivity?.id) {
      setActivity(selectedActivity!);
    }
  }, [id, selectedActivity]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedActivity) {
      dispatch(editActivity({ ...activity, id: selectedActivity?.id }));
      dispatch(viewActivity(selectedActivity.id));
      navigate(`/activities/${selectedActivity.id}`);
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
          type="date"
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
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
          loading={loadingEdit}
        />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          as={Link}
          to="/activities"
        />
      </Form>
    </Segment>
  );
};

export default ActivityEditForm;
