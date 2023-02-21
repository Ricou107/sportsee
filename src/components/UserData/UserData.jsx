import {useState, useEffect} from 'react';
import './UserData.css';
import Graphs from '../Graphs/Graphs';
import { getUserData } from '../../services/axios';

function UserData() {
  const [user, updateUser] = useState('')

  const fetchData = async () => {
    const response = await getUserData();
    if (!response) {
      throw new Error('Data could not be fetched!');
    } else {
      updateUser(response.data);
      return;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='UserData'>
        <p>Bonjour {user ? <span>{user.userInfos.firstName}</span> : ''}</p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <Graphs score={user.score} counts={user.keyData}/>
    </div>
  );
}

export default UserData;
