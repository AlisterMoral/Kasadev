
import myImage from '../assets/Falaise.png';
import '../styles/Image.css';

function ImageComponent() {
  return (
    <div className="image-container">
      <img src={myImage} alt="Falaise" className="Falaise" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default ImageComponent;