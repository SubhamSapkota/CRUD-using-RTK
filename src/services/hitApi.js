import axios from "axios";
import { baseUrl } from "../config/config";

let hitApi = axios.create({
  baseURL: baseUrl
});
export default hitApi