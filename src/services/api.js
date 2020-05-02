import axios from "axios";
import { API_HOST } from 'react-native-dotenv'

const api = axios.create({
  baseURL: `http://${API_HOST}:3333`,
});

export default api;
