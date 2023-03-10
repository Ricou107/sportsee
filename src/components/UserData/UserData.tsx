import { useEffect, useState } from "react";
import './UserData.css';
import Graphs from '../Graphs/Graphs';
import { getUserData } from '../../services/axios';
import {User} from "../../interface";

function UserData({ userId }) {
  const [user, updateUser] = useState<User | undefined>(undefined);

  const fetchData = async () => {
    const response = await getUserData(userId);
    if (!response) {
      throw new Error("Data could not be fetched!");
    } else {
      updateUser(response.data);
      return;
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="UserData">
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
