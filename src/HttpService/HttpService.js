/* eslint-disable consistent-return */
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export class HttpService {
  constructor(baseUrl, history) {
    this.url = baseUrl;
    this.history = history;
  }

  request = (method, path, postContent, additionalSettings = {}) =>
    fetch(`${this.url}${path}`, {
      method,
      headers: HEADERS,
      body: JSON.stringify(postContent),
      ...additionalSettings,
    }).then(this.parseResponse);

  get = (path, additionalSettings) =>
    this.request("GET", path, additionalSettings);

  post = (path, postContent, additionalSettings) =>
    this.request("POST", path, postContent, additionalSettings);

  parseResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      this.history.push("/login");
    } else {
      const responseError = {
        type: "Error",
        message: response.message || "Something went wrong",
        data: response.data || "",
        code: response.status || "",
      };
      let error = new Error();
      error = { ...error, ...responseError };
      console.log("Something went wrong:(");
      throw error;
    }
  };
}
