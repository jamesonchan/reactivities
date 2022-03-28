import { Dispatch } from "react";
import agent from "../../../app/api/agent";
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

      const { data } = await agent.Activities.detail(id);

      // change date format
      let activity: Activity = { ...data, date: new Date(data.date!) };

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
