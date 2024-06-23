import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/allana.png';
import img2 from '../../assets/radico.png';
import img3 from '../../assets/good.png';
import img4 from '../../assets/gujrath.png';
import img5 from '../../assets/solvex.png';

const Testimonials = () => {
  const imgfluid={


  }
  return (
    <Container>
         <h3 style={{textAlign:'center',margin:'20px',
        padding:'10px',color:'#000', fontFamily:'Times new roman'
      }}>Testimonials</h3>
      <Row className="justify-content-center align-items-center text-center m-5 p-5">
        <Col sm={6} md={4}>
          <img src={img1} alt="Allana testimonial" style={imgfluid} />
        </Col>
        <Col sm={6} md={4}>
          <img src={img2} alt="Radico testimonial" style={imgfluid} />
        </Col>
        <Col sm={6} md={4}>
          <img src={img3} alt="Goodyear testimonial" style={imgfluid} />
        </Col>
        <Col sm={6} md={4}>
          <img src={img4} alt="Gujrath Ambuja testimonial" style={{marginTop:'50px'}} />
        </Col>
        <Col sm={6} md={6} >
          <img src={img5} alt="Solvex testimonial" style={{marginLeft:'90px'}} />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
