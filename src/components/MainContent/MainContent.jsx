import LeftBar from '../LeftBar/LeftBar';
import UserData from '../UserData/UserData';
import './MainContent.css';

function MainContent({userId}) {
  return (
    <div className='MainContent'>
        <LeftBar />
        <UserData userId={userId}/>
    </div>
  );
}

export default MainContent;
