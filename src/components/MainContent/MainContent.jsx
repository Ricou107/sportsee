import LeftBar from '../LeftBar/LeftBar';
import UserData from '../UserData/UserData';
import './MainContent.css';

function MainContent({userId, updateUserId}) {
  return (
    <div className='MainContent'>
        <LeftBar />
        <UserData userId={userId} updateUserId={updateUserId}/>
    </div>
  );
}

export default MainContent;
