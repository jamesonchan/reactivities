import { Dispatch } from "react";
import { FormAction, FormActionType } from "../../actionTypes/formActionType";

export const openForm = () => (dispatch: Dispatch<FormAction>) => {
  dispatch({ type: FormActionType.FORM_OPEN });
};

export const closeForm = () => (dispatch: Dispatch<FormAction>) => {
  dispatch({ type: FormActionType.FORM_CLOSE });
};
