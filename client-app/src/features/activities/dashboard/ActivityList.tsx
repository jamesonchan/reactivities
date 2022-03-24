import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Item, Loader, Message, Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../hooks/typedReduxHook";
import deleteActivity from "../../../redux/actions/activityActions/activityDeleteAction";
import loadActivityList from "../../../redux/actions/activityActions/activityListAction";
import viewActivity from "../../../redux/actions/activityActions/activityViewAction";
import { ActivityActionType } from "../../../redux/actionTypes/activityActionType";
import ActivityListItem from "./ActivityListItem";

const ActivityList = ({}) => {
  const dispatch = useDispatch();
  const { activities: groupedActivities, loading } = useAppSelector(
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
    <>
      <Loader active={loading} />
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem
              key={activity.id}
              activity={activity}
              viewActivityHandler={viewActivityHandler}
              deleteActivityHandler={deleteActivityHandler}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default ActivityList;
