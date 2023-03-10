import axios from "axios";
import {UserActivity, UserPerformance, UserAverageSessions, User} from "../interface";
import mock from "../Assets/mock.json"

async function getUserData(userId: number): Promise<{data: User}> {
  try {
    const response = userId === 0 ? mock.mockUserCall : await (await axios.get(`http://localhost:3030/user/${userId}`)).data;
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getActivity(userId: number): Promise<{data: UserActivity}>  {
  try {
    const response = userId === 0 ? mock.mockActivityCall : await (await axios.get(`http://localhost:3030/user/${userId}/activity`)).data;
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getPerformance(userId: number): Promise<{data: UserPerformance}> {
  try {
    const response = userId === 0 ? mock.mockPerformanceCall : await (await axios.get(`http://localhost:3030/user/${userId}/performance`)).data;
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getAverageSessions(userId: number): Promise<{data: UserAverageSessions}> {
  try {
    const response = userId === 0 ? mock.mockAverageSessionsCall : await (await axios.get(`http://localhost:3030/user/${userId}/average-sessions`)).data;
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {getUserData, getActivity, getPerformance, getAverageSessions};
