import "../styles/Rental.css"
import Header from '../Conposant/Header';
import Footer from '../Conposant/Footer';
import Slideshow from '../Conposant/Slideshow';
import Logements from '../logements.json';
import Tag from "../Conposant/Tag";
import HostInfo from "../Conposant/Host";
import StarRating from "../Conposant/StarRating";
import Dropdown from "../Conposant/Dropdown"
import { useParams } from 'react-router-dom';

const Rental = () => {
const { propertyId } = useParams();
const currentProperty = Logements.find(property => property.id === propertyId);

return (
  <div className="Rental">
    <Header />
    <Slideshow pictures={currentProperty.pictures} />

    <div className="intro-container-flex">
      <section className="rental-intro">
        <h1 className="rental-intro__title">{currentProperty.title}</h1>
        <p className="rental-intro__location">{currentProperty.location}</p>
        <div className="tags-container">
          {currentProperty.tags.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </section>
      <section className="host-info-container">
      
      <HostInfo host={currentProperty.host} />
      <StarRating rating={currentProperty.rating} />
      </section>
    </div>

   
      <section className="Dropdown-container">
        <Dropdown
          equipments={currentProperty.equipments}
          description={currentProperty.description}
        />
      
    </section>

    <Footer />
  </div>
);
};

export default Rental;