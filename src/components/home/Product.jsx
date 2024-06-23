import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img1 from '../../assets/biomass_briquette.jpg';
import img2 from '../../assets/charcoal.webp';
import img3 from '../../assets/rice_husk.jpg';
import img4 from '../../assets/firewsood.jpg';
import img5 from '../../assets/biomass_pellets.jpg';
import img6 from '../../assets/coal.webp';

function Product() {
  return (
    <Container className="py-5">
      <h3 style={{textAlign:'center',margin:'20px',
        padding:'10px',color:'#000', fontFamily:'Times new roman'
      }}>Our Products</h3>
      <Row className="mb-4">
        {/* First row */}
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Biomass Briquettes</Card.Title>
              <Card.Text>
                Discover our premium biomass briquettes, the perfect eco-friendly solution for clean and efficient energy.our biomass briquettes are compressed using advanced technology to ensure consistency and durability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Charcoal</Card.Title>
              <Card.Text>
                Experience the warmth and efficiency of our premium charcoal, ideal for grilling and outdoor cooking. Made from natural wood sources, our charcoal ensures a clean and enjoyable cooking experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Rice Husk, Sugarcane Bagasse</Card.Title>
              <Card.Text>
                Discover our top-quality biomass pellets, an eco-friendly solution for efficient and sustainable energy. Carefully processed from rice husk residues, our pellets are crafted to deliver consistent performance and reliability in various heating and industrial applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Second row */}
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Firewood</Card.Title>
              <Card.Text>
                Experience the warmth and efficiency of our premium firewood, meticulously sourced and seasoned for optimal performance. Our firewood is ideal for residential heating, outdoor fire pits, and cooking, offering a natural and eco-friendly solution for your energy needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Biomass Pellets</Card.Title>
              <Card.Text>
                Explore our high-quality biomass pellets, crafted with care from natural organic materials. Our pellets are meticulously produced using advanced technology to ensure consistency and efficiency, making them an ideal choice for clean and sustainable energy solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }} className="mx-auto">
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title>Imported And Indian Coal</Card.Title>
              <Card.Text>
                Explore our high-quality imported coal, sourced from renowned global suppliers to deliver superior performance and reliability. Ideal for industrial applications, power generation, and heating, our imported coal ensures efficient energy conversion and operational excellence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
