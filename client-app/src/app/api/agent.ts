import axios from "axios";


axios.defaults.baseURL = "/api";

const requests = {
  get: <T>(url: string) => axios.get<T>(url),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body),
  del: <T>(url: string) => axios.delete<T>(url),
};

const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  detail: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post("/activities", activity),
  delete: (id: string) => requests.del(`/activities/${id}`),
  edit: (activity: Activity) =>
    requests.put(`/activities/${activity.id}`, activity),
};

const agent = {
  Activities,
};

export default agent;
