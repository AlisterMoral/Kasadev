import '../styles/Error.css'
import { Link } from 'react-router-dom';

function Error() {
    return (
       <div className='error-page'>
        <h1 className='error-number'>404</h1>
        <p className='error-txt'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='error-acceuil' to="/">Retourner sur la page d'accueil</Link>
       </div> 
        
    )
}

export default Error;