import LeftBar from '../LeftBar/LeftBar';
import {useState, useEffect} from 'react';
import './MainContent.css';
import getUserData from '../../services/axios'

function MainContent() {
	const [user, updateUser] = useState('')

  const fetchData = async () => {
    const response = await getUserData();
    if (!response) {
      throw new Error('Data coud not be fetched!');
    } else {
      updateUser(response.data);
      return;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user)

  return (
    <div className='MainContent'>
        <LeftBar />
        <p>{user.id}</p>
    </div>
  );
}

export default MainContent;
