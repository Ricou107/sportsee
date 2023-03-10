import './Header.css';
import logo from '../../Assets/logo.png'

function Header({updateUserId}) {

  return (
    <header className="App-header">
        <img src={logo} alt='logo' className="Logo-header"/>
        <p>Accueil</p>
        <div className="dropdown">
          <button className="dropbtn">Profil</button>
          <div className="dropdown-content">
            <p onClick={() => updateUserId(0)}>Mock User</p>
            <p onClick={() => updateUserId(12)}>Karl</p>
            <p onClick={() => updateUserId(18)}>Cecilia</p>
          </div>
        </div>
        <p>Réglage</p>
        <p>Communauté</p>
    </header>
  );
}

export default Header;
