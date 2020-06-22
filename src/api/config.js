let basePath = "";
const apiVersion = "v1";
const environment = process.env.NODE_ENV;

if (environment === "development") {
  basePath = "http://localhost:5000/api";
} else {
  basePath = "https://algo.herokuapp.com/api";
}
export { basePath, apiVersion };

export const config = {
  headers: {
    "X-Parse-Application-Id": "mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja",
    "X-Parse-Master-Key": "TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH",
  },
};
