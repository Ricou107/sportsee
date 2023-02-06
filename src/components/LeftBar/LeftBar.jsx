import './LeftBar.css';
import navbarLeft from '../../Assets/navbarLeft.png'

function LeftBar() {
  return (
    <section className='LeftBar'>
        <img src={navbarLeft} alt='navbarLeft' className="navbarLeft"/>
        <p>Copiryght, SportSee 2020</p>
    </section>
  );
}

export default LeftBar;
