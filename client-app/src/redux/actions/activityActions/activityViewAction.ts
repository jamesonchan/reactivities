import axios from "axios";
import { Dispatch } from "react";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const viewActivity =
  (id: string) => async (dispatch: Dispatch<ActivityAction>) => {
    try {
      dispatch({
        type: ActivityActionType.ACTIVITY_VIEW_REQUEST,
      });

      const { data } = await axios.get<Activity>(`/api/activities/${id}`);
      
      // change data format
      let activity: Activity = { ...data, date: data.date.split("T")[0] };

      dispatch({
        type: ActivityActionType.ACTIVITY_VIEW_SUCCESS,
        payload: activity,
      });
    } catch (error: any) {
      dispatch({
        type: ActivityActionType.ACTIVITY_VIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default viewActivity;
