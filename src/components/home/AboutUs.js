import React from 'react';
import '../../styles/AboutUs.scss'; // Import SCSS file for additional styling (if needed)
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const AboutUs = () => {
  return (
    <Container className="py-5 g-5">
      <div className="about-us">
      <h3 style={{textAlign:'center',margin:'20px',
        padding:'10px',color:'#000', fontFamily:'Times new roman'
      }}>About Us</h3>
        <Row>
          <Col md={6}>
            <section className="introduction">
              <div className="introduction-content">
                <h2 className="section-title">Introduction</h2>
                <p>
                  Mayank Enterprises sets out to be a leading supplier of complete energy requirements for industries. We supply a complete range of multipurpose steam coal, biomass briquettes, and more for various applications.
                </p>
              </div>
            </section>

            <section className="missions">
              <div className="missions-content">
                <h2 className="section-title">Mission</h2>
                <ul>
                  <li>To become the first choice for every client.</li>
                  <li>To provide high-quality materials at affordable prices.</li>
                  <li>To create and cultivate long-term relationships with clients.</li>
                  <li>To achieve complete customer satisfaction.</li>
                  <li>To maintain professional relationships with our dedicated clients.</li>
                </ul>
              </div>
            </section>
          </Col>

          <Col md={6}>
            <section className="products-details">
              <div className="products-details-content">
                <div className="products">
                  <h2 className="section-title">Products</h2>
                  <ul>
                    <li>Biomass Briquettes</li>
                    <li>Biomass Pellets</li>
                    <li>Ricehusk, Sugarcane Bagasse</li>
                    <li>Firewood</li>
                    <li>Charcoal</li>
                    <li>Imported and Indian Coal</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="company-details">
              <div className="details">
                <h2 className="section-title">Company Details</h2>
                <ul>
                  <li>Company Name: Mayank Enterprises</li>
                  <li>GST Number: 27AGCPN5226F1ZK</li>
                  <li>PAN Details: AGCPN5226F</li>
                  <li>Registered Office Address: 51, Vishojit, Jyotinagar, Aurangabad-431005</li>
                </ul>
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutUs;
