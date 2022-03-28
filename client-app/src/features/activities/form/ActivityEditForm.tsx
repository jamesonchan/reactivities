import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button, Header, Segment
} from "semantic-ui-react";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MyTextInput from "../../../app/common/form/MyTextInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import editActivity from "../../../redux/actions/activityActions/activityEditAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";
import validationSchema from "./ValidationSchema";

const ActivityEditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const initialState = {
    id: "",
    title: "",
    date: null,
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

  const handleFormSubmit = (activity: Activity) => {
    if (selectedActivity) {
      dispatch(editActivity({ ...activity, id: selectedActivity?.id }));
      dispatch(viewActivity(selectedActivity.id));
      navigate(`/activities/${selectedActivity.id}`);
    }
  };



  return (
    <Segment clearing>
      <Header content="Activity Details" sub color="teal" />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={selectedActivity ? selectedActivity : activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit}>
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
              loading={loadingEdit}
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

export default ActivityEditForm;
