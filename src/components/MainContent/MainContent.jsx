import LeftBar from '../LeftBar/LeftBar';
import UserData from '../UserData/UserData';
import './MainContent.css';

function MainContent() {
  return (
    <div className='MainContent'>
        <LeftBar />
        <UserData />
    </div>
  );
}

export default MainContent;
