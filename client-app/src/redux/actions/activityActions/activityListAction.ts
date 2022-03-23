import { Dispatch } from "react";
import agent from "../../../app/api/agent";
import { dateFormat, sortDate } from "../../../utils/dateFormat";
import { groupActivitiesByDate } from "../../../utils/groupActivitiesByDate";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const loadActivityList = () => async (dispatch: Dispatch<ActivityAction>) => {
  try {
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_REQUEST,
    });

    const { data } = await agent.Activities.list();
    // change date format
    const dateFormatActivities = dateFormat(data);
    const dateStortedActivities = sortDate(dateFormatActivities);
    const groupedActivities = groupActivitiesByDate(dateStortedActivities);

    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_SUCCESS,
      payload: groupedActivities,
    });
  } catch (error: any) {
    dispatch({
      type: ActivityActionType.ACTIVITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default loadActivityList;
