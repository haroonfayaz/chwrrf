import axios from "axios";

const baseURL = "http://13.40.5.17:8080/api/";
const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export const getAllNotifications = async () => {
  try {
    const response = await instance.get("getAllNotify");
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
    throw error;
  }
};
export const getAllEvents = async () => {
    try {
      const response = await instance.get("getAllEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };
  export const getAllFuturePlans = async () => {
    try {
      const response = await instance.get("getAllPrograms");
      return response.data;
    } catch (error) {
      console.error("Error fetching future plans:", error);
      throw error;
    }
  };  