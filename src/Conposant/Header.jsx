import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <header className='kasa-banner'> 
            <img src={logo} alt="logo kasa" />
            <div className='nav-bar'>
                <p className='acceuil-link'>Accueil</p>
                <p className='propos-link'>À propos</p>
            </div>
        </header>
    )
}

export default Header;