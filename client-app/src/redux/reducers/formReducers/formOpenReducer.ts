import { FormAction, FormActionType } from "../../actionTypes/formActionType";

interface FormState {
  formOpen: boolean;
}

const initialState: FormState = {
  formOpen: false,
};

const formOpenReducer = (
  state: FormState = initialState,
  action: FormAction
) => {
  switch (action.type) {
    case FormActionType.FORM_OPEN:
      return { formOpen: true };
    case FormActionType.FORM_CLOSE:
      return { formOpen: false };

    default:
      return state;
  }
};

export default formOpenReducer;
