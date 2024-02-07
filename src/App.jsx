import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import GalleryHome from './pages/GalleryHome';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
  return <Router>
    <Routes>
    <Route index element={<GalleryHome />} />
      <Route path="/not-found" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </Router>;
}

export default App
