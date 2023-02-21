import axios from "axios";
import {UserActivity, UserPerformance} from "../interface";

async function getUserData() {
  try {
    const response = await axios.get("http://localhost:3030/user/18");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getActivity(): Promise<{data: UserActivity}>  {
  try {
    const response = await axios.get("http://localhost:3030/user/18/activity");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getPerformance(): Promise<{data: UserPerformance}> {
  try {
    const response = await axios.get(
      "http://localhost:3030/user/18/performance"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUserData, getActivity, getPerformance };
