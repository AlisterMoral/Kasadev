
import { Link } from 'react-router-dom';
import '../styles/Location.css';
import logements from '../logements.json';

const Location = () => {
  return (
    <div className="location-container">
   {logements.map(logement => (
  <Link to={`/rental/${logement.id}`} key={logement.id} className='location-card-link'>
    <div className='location-card'>
      <img src={logement.cover} alt={logement.title} className='card-image' />
      <div className='card-content'>
        <h3>{logement.title}</h3>
      </div>
    </div>
  </Link>
))}
    </div>
  );
};

export default Location;