import Home from './pages/Home';
import AboutPage from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
