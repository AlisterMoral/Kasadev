import '../styles/Header.css';
import logo from '../assets/logo.svg'; 
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='kasa-banner'> 
            <img src={logo} alt="logo kasa" className='logo-kasa' />
            <div className='nav-bar'>
                <NavLink className='acceuil-link' to="/">Accueil</NavLink>
                <NavLink className="propos-link" to="/about">A propos</NavLink>
            </div>
        </header>
    )
}

export default Header;