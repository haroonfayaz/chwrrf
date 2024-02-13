import axios from "axios";

// const baseURL = "http://13.40.5.17:8080/api/";
// const baseURL = "http://admin.chwrrf.org:8080/api/";
const baseURL = "https://admin.chwrrf.org/api/";


const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",

  },
});

export const getAllEvents = async () => {
  try {
    const response = await instance.get("getAllEvents");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};