

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RiContactsFill } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
 import { FaLeaf } from 'react-icons/fa';
 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import Logo from '../layout/Logo';
 import '../../styles/header.scss'

function Header() {
  return (
    <Navbar expand="lg" className='nav'>
     <Navbar.Brand style={{marginLeft:'10px'}}>
         <motion.div 
           initial={{ x: "-100%" }}
           whileInView={{ x: 0 }}
         >
           <Logo />
           <FaLeaf style={{color: '#4CBB17',
            fontSize:' 3rem'}} />
         </motion.div>
       </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
        <Nav className="ml-auto"> {/* Use ml-auto to align items to the right */}
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/testimonial" className="nav-link">Testimonial</Link>
          <Link to="/footer" className="nav-link"><RiContactsFill /></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
