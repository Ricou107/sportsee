import { useState } from "react";
import './UserData.css';
import Graphs from '../Graphs/Graphs';
import { getUserData } from '../../services/axios';
import {User} from "../../interface";

function UserData({ userId, updateUserId }) {
  const [user, updateUser] = useState<User | undefined>(undefined);
  const [APIconnected, updateAPIconnected] = useState<boolean>(true);

  /**
   * Fetch the user data and provide mock data if necessary
   * @constructor
   */
  const fetchData = async () => {
    const response = await getUserData(userId);
    if (!response) {
      throw new Error("Data could not be fetched!");
    } else {
      updateUser(response.data);
      return;
    }
  };

  fetchData()
    .then(() => {
      if (userId !== 0) {
        updateAPIconnected(true);
      }
    })
    .catch(() => {
      updateAPIconnected(false);
      updateUserId(0);
      fetchData();
    });

  return (
    <div className="UserData">
      {APIconnected ? (
        ""
      ) : (
        <div>API is not responding. Providing mock instead.</div>
      )}
      <p className="UserData-title">
        Bonjour{" "}
        {user ? (
          <span style={{ color: "#FF0101" }}>{user.userInfos.firstName}</span>
        ) : (
          ""
        )}
      </p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      {user ? (
        <Graphs
          score={user.score ? user.score : user.todayScore}
          counts={user.keyData}
          userId={userId}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default UserData;
