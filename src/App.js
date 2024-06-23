
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/home/Home'; // Replace with your actual page components
import Product from './components/home/Product';
import AboutUs from './components/home/AboutUs';
import Gallery from './components/home/Gallery';
import Testimonials from './components/home/Testimonials';
import Footer from './components/layout/Footer';
import './styles/app.scss'

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Header is rendered outside of the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


