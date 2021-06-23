import axios from "axios";

// creating global instance for the axios to call apis
export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers.common["Content-Type"] = "application/json";

export const BASE_URL = `${process.env.REACT_APP_SERVER_URL || "http://localhost:8888/api/tutorial"}`;

