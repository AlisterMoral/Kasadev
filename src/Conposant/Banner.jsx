

import '../styles/Image.css';

function Banner({image, tagline}) {

  return (
  <section className="image-container">
      <img src={image} alt='Paysage' className='paysage' />
      {tagline ?
      <h1 className="caption">{tagline}</h1> :
      null
      }
  </section>
  )
}

export default Banner