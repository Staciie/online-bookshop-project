import { HttpService } from "../HttpService/HttpService";
import { history } from "./history";

export const bookHttpService = new HttpService(
  " http://localhost:3004",
  history
);
