import { HttpService } from "../httpService/httpService";
import { history } from "./history";

export const bookHttpService = new HttpService(
  " http://localhost:3004",
  history
);
