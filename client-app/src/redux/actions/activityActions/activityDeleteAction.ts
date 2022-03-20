import axios from "axios";
import { Dispatch } from "react";
import {
  ActivityAction,
  ActivityActionType,
} from "../../actionTypes/activityActionType";

const deleteActivity =
  (id: string) => async (dispatch: Dispatch<ActivityAction>) => {
    try {
      dispatch({
        type: ActivityActionType.ACTIVITY_DELETE_REQUEST,
      });

      await axios.delete(`/api/activities/${id}`);
      dispatch({
        type: ActivityActionType.ACTIVITY_DELETE_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: ActivityActionType.ACTIVITY_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default deleteActivity;
