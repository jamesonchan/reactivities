export enum ActivityActionType {
  ACTIVITY_LIST_REQUEST = "activity_list_request",
  ACTIVITY_LIST_SUCCESS = "activity_list_success",
  ACTIVITY_LIST_FAIL = "activity_list_fail",

  ACTIVITY_VIEW_REQUEST = "activity_view_request",
  ACTIVITY_VIEW_SUCCESS = "activity_view_success",
  ACTIVITY_VIEW_FAIL = "activity_view_fail",
  ACTIVITY_VIEW_RESET = "activity_view_reset",

  ACTIVITY_DELETE_REQUEST = "activity_delete_request",
  ACTIVITY_DELETE_SUCCESS = "activity_delete_success",
  ACTIVITY_DELETE_FAIL = "activity_delete_fail",

  ACTIVITY_CREATE_REQUEST = "activity_create_request",
  ACTIVITY_CREATE_SUCCESS = "activity_create_success",
  ACTIVITY_CREATE_FAIL = "activity_create_fail",
}

// activity list load actions
interface ActivityListRequestAction {
  type: ActivityActionType.ACTIVITY_LIST_REQUEST;
}

interface ActivityListSuccessAction {
  type: ActivityActionType.ACTIVITY_LIST_SUCCESS;
  payload: Activity[];
}

interface ActivityListFailAction {
  type: ActivityActionType.ACTIVITY_LIST_FAIL;
  payload: string;
}

// activity view actions
interface ActivityViewRequestAction {
  type: ActivityActionType.ACTIVITY_VIEW_REQUEST;
}

interface ActivityViewSuccessAction {
  type: ActivityActionType.ACTIVITY_VIEW_SUCCESS;
  payload: Activity;
}

interface ActivityViewFailAction {
  type: ActivityActionType.ACTIVITY_VIEW_FAIL;
  payload: string;
}

interface ActivityViewResetAction {
  type: ActivityActionType.ACTIVITY_VIEW_RESET;
}

// activity delete actions
interface ActivityDeleteRequestAction {
  type: ActivityActionType.ACTIVITY_DELETE_REQUEST;
}

interface ActivityDeleteSuccessAction {
  type: ActivityActionType.ACTIVITY_DELETE_SUCCESS;
}

interface ActivityDeleteFailAction {
  type: ActivityActionType.ACTIVITY_DELETE_FAIL;
  payload: string;
}

// activity create actions
interface ActivityCreateRequestAction {
  type: ActivityActionType.ACTIVITY_CREATE_REQUEST;
}

interface ActivityCreateSuccessAction {
  type: ActivityActionType.ACTIVITY_CREATE_SUCCESS;
}

interface ActivityCreateFailAction {
  type: ActivityActionType.ACTIVITY_CREATE_FAIL;
  payload: string;
}

// activity action type
export type ActivityAction =
  | ActivityListRequestAction
  | ActivityListSuccessAction
  | ActivityListFailAction
  | ActivityViewRequestAction
  | ActivityViewSuccessAction
  | ActivityViewFailAction
  | ActivityViewResetAction
  | ActivityDeleteRequestAction
  | ActivityDeleteSuccessAction
  | ActivityDeleteFailAction
  | ActivityCreateRequestAction
  | ActivityCreateSuccessAction
  | ActivityCreateFailAction;
