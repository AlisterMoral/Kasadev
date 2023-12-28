
import '../styles/Location.css';
import Card from './Card';
import appartements from '../logements.json';




const Location = () => {
  return (
    <div className="location-container">
      {appartements.map(appartement => <Card title={appartement.title} cover={appartement.cover} key={appartement.id}/>)}
    </div>
  );
};

export default Location;