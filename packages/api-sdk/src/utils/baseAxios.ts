import axios from "axios";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const IS_DEV = process.env.NODE_ENV === "development";
// eslint-disable-next-line turbo/no-undeclared-env-vars
const PORT = process.env.PORT;
const HOST_URL = !IS_DEV
  ? `${location.protocol}//${location.host}`
  : "http://127.0.0.1:8000";

console.log("process.env", { ...process.env }, PORT);

function createAxios() {
  const instance = axios.create();
  instance.defaults.timeout = 10000; // 请求超时设置为10秒
  instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  instance.defaults.baseURL = IS_DEV ? HOST_URL : "";
  instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      return response;
    },
    (error) => {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  return instance;
}
