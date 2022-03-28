import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MyTextInput from "../../../app/common/form/MyTextInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import createActivity from "../../../redux/actions/activityActions/activityCreateAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";
import validationSchema from "./ValidationSchema";

const ActivityCreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    id: "",
    title: "",
    date: null,
    description: "",
    category: "",
    city: "",
    venue: "",
  };
  const [activity] = useState<Activity>(initialState);
  const { success: successCreate, loading: loadingCreate } = useAppSelector(
    (state) => state.activityCreate
  );

  useEffect(() => {
    dispatch({ type: ActivityActionType.ACTIVITY_CREATE_RESET });
    if (successCreate) {
      dispatch(loadActivityList());
    }
  }, [dispatch, successCreate]);

  const handleFormSubmit = (activity: Activity) => {
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      dispatch(createActivity(newActivity));
      dispatch(viewActivity(newActivity.id));
      navigate(`/activities/${newActivity.id}`);
    }
  };

  return (
    <Segment clearing>
      <Header content="Activity Details" sub color="teal" />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name="title" placeholder="Title" />
            <MyTextArea rows={3} placeholder="Description" name="description" />
            <MySelectInput
              options={categoryOptions}
              placeholder="Category"
              name="category"
            />
            <MyDateInput
              placeholderText="Date"
              name="date"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <Header content="Location Details" sub color="teal" />
            <MyTextInput placeholder="City" name="city" />
            <MyTextInput placeholder="Venue" name="venue" />
            <Button
              floated="right"
              positive
              type="submit"
              content="Submit"
              loading={loadingCreate}
              disabled={isSubmitting || !dirty || !isValid}
            />
            <Button
              floated="right"
              type="button"
              content="Cancel"
              as={Link}
              to="/activities"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default ActivityCreateForm;
