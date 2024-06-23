import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from './AboutUs';
import Product from './Product';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Footer from '../layout/Footer';
import '../../styles/home.scss'; // Ensure correct path to your SCSS file

function Home() {
  return (
    <>
      <section className='home'>
        <div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            MAYANK ENTERPRISES
          </motion.h1>
          <motion.p
            className="text-style"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            "Give yourself a trusted Product"
          </motion.p>
        </div>
      </section>
    <AboutUs/>
    <Product/>
    <Gallery/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default Home;
