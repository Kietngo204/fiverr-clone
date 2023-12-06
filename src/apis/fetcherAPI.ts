import { InternalAxiosRequestConfig } from "./../../node_modules/axios/index.d";
import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDcyMDAwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzEwODY3NjAwfQ.m06_MDnk8Iecyg24D9-3tgZDQA5I2NK8OBNVISQpnlc",
  },
});

fetcher.interceptors.request.use(
  (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const user = JSON.parse(localStorage.getItem("loginUser") as any);

    if (user) {
      request.headers.Authorization = `Bearer ${user.token}`;
    }

    return request;
  }
);

//response interceptors
fetcher.interceptors.response.use(
  (response) => {
    // có thể thay đổi response trước khi trả về
    return response;
  },
  (error) => {
    // kiểm tra nếu lỗi là 401 => token không hợp lệ => đăng xuất
    if (error.response.status === 401) {
      localStorage.removeItem("currentUser");
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

export default fetcher;
