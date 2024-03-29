import { useState } from "react"
import arrowRight from "../assets/arrow_right.svg"
import arrowLeft from "../assets/arrow_left.svg"
import "../styles/Slideshow.css"

function Slideshow({ pictures, totalIndex }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);    
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    totalIndex = pictures.length
    const showNav = totalIndex > 1 ? {} : { display: 'none' }
    

    return (
    <section className="slideshow">
        <img src={pictures[currentIndex]} alt='Paysage' className='slideshow__image' />
        <img src={arrowLeft} alt='Flèche gauche' className='slideshow__arrow-left' onClick={goToPrevious} style={showNav} />
        <img src={arrowRight} alt='Flèche droite' className='slideshow__arrow-right' onClick={goToNext} style={showNav} />
        <span className="slideshow__index" style={showNav}>{currentIndex + 1}/{totalIndex}</span>      
    </section>
    )
}

export default Slideshow