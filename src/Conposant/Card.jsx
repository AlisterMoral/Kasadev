
import '../styles/Location.css';

const Card = ({ title, cover }) => {
  return (
    <article className='location-card'>
      <img src={cover} alt={title} className='card-image' />
      <div className='card-content'>
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default Card;