/* eslint-disable consistent-return */
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export class HttpService {
  constructor(baseUrl, history) {
    this.url = baseUrl;
    this.history = history;
    this.parseResponse = this.parseResponse.bind(this);
  }

  request = (method, path, headers, postContent) => {
    return fetch(`${this.url}${path}`, {
      method,
      headers,
      body: JSON.stringify(postContent),
    }).then(this.parseResponse);
  };

  get(path) {
    return this.request("GET", path);
  }

  post(path, postContent) {
    return this.request("POST", path, HEADERS, postContent);
  }

  parseResponse(response) {
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
  }
}
