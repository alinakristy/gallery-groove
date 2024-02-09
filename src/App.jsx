import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import View from './pages/View';
import About from './pages/About';
import NavBar from './components/NavBar';

import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import GalleryHome from './pages/GalleryHome';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
//import 

function App() {
  return <Router>
    <NavBar />
    <Routes>

    <Route path="/" element={<GalleryHome />} />
   
      <Route path="/not-found" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="about" element={<About />} />
      <Route path="view" element={< View />} />
    </Routes>
    <Footer />
  </Router>;
}

// <Route index element={<GalleryHome />} />

export default App
