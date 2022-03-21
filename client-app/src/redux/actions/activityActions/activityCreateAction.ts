import { Dispatch } from "react";
import agent from "../../../app/api/agent";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const createActivity =
  (activity: Activity) => async (dispatch: Dispatch<ActivityAction>) => {
    try {
      dispatch({
        type: ActivityActionType.ACTIVITY_CREATE_REQUEST,
      });

      await agent.Activities.create(activity);
      dispatch({
        type: ActivityActionType.ACTIVITY_CREATE_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: ActivityActionType.ACTIVITY_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default createActivity;
