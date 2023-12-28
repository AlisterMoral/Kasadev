
import Header from '../Conposant/Header'
import image from '../assets/falaise.png'
import Falaise from '../Conposant/Banner'
import Location from '../Conposant/Location';
import Footer from '../Conposant/Footer';




function Home() {

  const tagline = "Chez vous, partout et ailleurs"

  return (
    <div className="App">
      <Header />
      <Falaise image={image} tagline={tagline} />
      <Location/>
      <Footer />
    </div>
  );
}

export default Home;
