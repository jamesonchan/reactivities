import { Dispatch } from "react";
import agent from "../../../app/api/agent";
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

      await agent.Activities.edit(activity);

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
