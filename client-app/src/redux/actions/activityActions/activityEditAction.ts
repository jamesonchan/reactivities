import axios from "axios";
import { Dispatch } from "react";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const editActivity =
  (activity: Activity) => async (dispatch: Dispatch<ActivityAction>) => {
    try {
      dispatch({
        type: ActivityActionType.ACTIVITY_EDIT_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.put(`/api/activities/${activity.id}`, activity, config);

      dispatch({
        type: ActivityActionType.ACTIVITY_EDIT_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: ActivityActionType.ACTIVITY_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default editActivity;
