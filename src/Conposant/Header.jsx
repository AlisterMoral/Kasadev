import '../styles/Header.css';
import logo from '../assets/logo.svg'; 
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='kasa-banner'> 
            <img src={logo} alt="logo kasa" />
            <div className='nav-bar'>
                <Link className='acceuil-link' to="/">Accueil</Link>
                <Link className="propos-link" to="/about">A propos</Link>
            </div>
        </header>
    )
}

export default Header;