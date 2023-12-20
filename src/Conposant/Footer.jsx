import '../styles/Footer.css';
import logo from '../assets/Logo-white.png';

function Footer() {
    return (
        <footer className='kasa-footer'> 
            <img src={logo} alt="logo kasa" />
            <div className='footer-bar'>
                <p className='footer-copy'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;