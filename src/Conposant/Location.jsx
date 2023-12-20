
import '../styles/Location.css';
import Card from './Card';
import appartements from '../logements.json';
console.log(appartements)

const Location = () => {
  return (
    <div className="location-container">
      {appartements.map(appartement => <Card title={appartement.title} key={appartement.id}/>)}
      
      
    </div>
  );
};

export default Location;