import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

axios.defaults.baseURL = "/api";

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        if (typeof data === "string") {
          toast.error(data);
        }
        if (config.method === "get" && data.errors.hasOwnProperty("id")) {
          history.push("/not-found");
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }
        break;
      case 401:
        toast.error("unauthorized");
        break;
      case 404:
        history.push("/not-found");
        break;
      case 500:
        toast.error("server error");
        break;
    }
    return Promise.reject(error);
  }
);

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
