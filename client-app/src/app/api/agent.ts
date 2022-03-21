import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "/api";

const responseBody = (response: AxiosResponse) => response.data;


