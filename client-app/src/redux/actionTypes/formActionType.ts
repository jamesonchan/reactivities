export enum FormActionType {
  FORM_OPEN = "form_open",
  FORM_CLOSE = "form_close",
}

interface FormOpenAction {
  type: FormActionType.FORM_OPEN;
}

interface FormCloseAction {
  type: FormActionType.FORM_CLOSE;
}

export type FormAction = FormOpenAction | FormCloseAction;
