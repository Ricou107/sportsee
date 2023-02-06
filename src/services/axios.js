import axios from "axios";

export default async function getUserData() {
  try {
    const response = await axios.get("http://localhost:3030/user/18");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
