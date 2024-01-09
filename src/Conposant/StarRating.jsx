
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
    const totalStars = 5;
    const filledStars = Math.floor(Number(rating));
  
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((star, index) => {
          index += 1;
          return (
            <div key={index}>
              <FontAwesomeIcon
                icon={faStar}
                className={index <= filledStars ? "star_on" : "star_off"}
                style={{ color: index <= filledStars ? '#FF6060' : '#C0C0C0' }}
              />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default StarRating;