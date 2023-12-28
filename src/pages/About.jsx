import Header from '../Conposant/Header';
import Montagne from '../Conposant/Banner'
import image from '../assets/montagne.png'
import Collapse from '../Conposant/Collapse';
import Footer from '../Conposant/Footer';
import '../styles/About.css'


function AboutPage() {

  const tagline=null

    return (
      <div className="About-page">
        <Header />
        <Montagne image={image} tagline={tagline} />
        <Collapse/>
        <Footer />
      </div>
    );
  }

export default AboutPage;