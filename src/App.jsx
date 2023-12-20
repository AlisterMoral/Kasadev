const router = createBrowserRouter([
  {
    path: '/'
  }
])

import Header from '../src/Conposant/Header'
import Falaise from '../src/Conposant/Image';
import Location from '../src/Conposant/Location';
import Footer from '../src/Conposant/Footer';
import { createBrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Falaise/> 
      <Location/>
      <Footer />
    </div>
  );
}

export default App;
