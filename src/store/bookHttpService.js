import { HttpService } from "../HttpService/HttpService";
import { history } from "./history";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://my-json-server.typicode.com/staciie/online-bookshop-project-json-server"
    : "http://localhost:3004";

export const bookHttpService = new HttpService(apiUrl, history);
