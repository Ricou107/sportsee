import './Header.css';
import logo from '../../Assets/logo.png'

function Header() {
  return (
    <header className="App-header">
        <img src={logo} alt='logo' className="Logo-header"/>
        <p>Accueil</p>
        <p>Profil</p>
        <p>Réglage</p>
        <p>Communauté</p>
    </header>
  );
}

export default Header;
