// Gallery.jsx

import React, { useState } from 'react';
import '../../styles/gallery.scss'; // Import SCSS file
import img1 from '../../assets/biomass_briquette.jpg';
import img2 from '../../assets/charcoal.webp'
import img3 from '../../assets/biomass_pellets.jpg';
import img4 from '../../assets/coal.webp'
import img5 from '../../assets/firewsood.jpg';
import img6 from '../../assets/rice_husk.jpg'
import img7 from '../../assets/biomass-pellets2.webp';
import img8 from '../../assets/charcoal2.jpg';
import img9 from '../../assets/firewood3.webp';
import img10 from '../../assets/firewood4.webp';
import img11 from '../../assets/babool-long-wood.jpg';
import img12 from '../../assets/firewood.webp'
import img13 from '../../assets/biomass-pellets.jpg'
import img14 from '../../assets/Biomass Briquettes_2.webp'
function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCards = (filter) => {
    setActiveFilter(filter);

    const cards = document.querySelectorAll('#filterable-cards .card');
    cards.forEach(card => {
      const datasetName = card.getAttribute('data-name');
      if (filter === 'all' || datasetName === filter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  };

  return (
    <div className="container p-5" >
      <div className="row mt-5" id="filter-buttons">
      <h3 style={{textAlign:'center',margin:'20px',
        padding:'10px',color:'#000', fontFamily:'Times new roman'
      }}>Gallery</h3>
        <div className="col-15">
          <button className={`btn mb-2 me-1 ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterCards('all')}>Show all</button>
          <button className={`btn mb-2 mx-1 ${activeFilter === 'biomass_briquette' ? 'active' : ''}`} onClick={() => filterCards('biomass_briquette')}>Biomass Briquette</button>
          <button className={`btn mb-2 mx-1 ${activeFilter === 'biomass_pellets' ? 'active' : ''}`} onClick={() => filterCards('biomass_pellets')}>Biomass Pellets</button>
          <button className={`btn mb-2 mx-1 ${activeFilter === 'charcoal' ? 'active' : ''}`} onClick={() => filterCards('charcoal')}>Charcoal</button>
          <button className={`btn mb-2 mx-1 ${activeFilter === 'firewood' ? 'active' : ''}`} onClick={() => filterCards('firewood')}>Firewood</button>
          
          <button className={`btn mb-2 mx-1 ${activeFilter === 'ricehuck' ? 'active' : ''}`} onClick={() => filterCards('ricehuck')}>Rice Huck</button>
          <button className={`btn mb-2 mx-1 ${activeFilter === 'indian' ? 'active' : ''}`} onClick={() => filterCards('indian')}>Imported & Indian Coal</button>
        </div>
      </div>

      <div className="row px-0 mt-5 gap-2" id="filterable-cards">
        <div className="card p-0" data-name="biomass_briquette">
          <img src={img1} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Biomass Briquette</h6>
          </div>
        </div>
        <div className="card p-0" data-name="charcoal">
          <img src={img2} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Charcoal</h6>
          </div>
        </div>
        <div className="card p-0" data-name="nature">
          <img src={img3} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Biomass Pellets</h6>
          </div>
        </div>
        <div className="card p-0" data-name="indian">
          <img src={img4} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Imported & Indian Coal</h6>
          </div>
        </div>
        <div className="card p-0" data-name="firewood">
          <img src={img5} alt="img" />
          <div className="card-body">
            <h6 className="card-title">firewood</h6>
          </div>
        </div>
        <div className="card p-0" data-name="ricehuck">
          <img src={img6} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Rice Huck, Sugarcane bagase</h6>
          </div>
        </div>
        <div className="card p-0" data-name="biomass_pellets">
          <img src={img7} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Biomass Pellets</h6>
          </div>
        </div>
        <div className="card p-0" data-name="charcoal">
          <img src={img8} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Charcoal</h6>
          </div>
        </div>
        <div className="card p-0" data-name="firewood">
          <img src={img9} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Firewood</h6>
          </div>
        </div>
        <div className="card p-0" data-name="firewood">
          <img src={img10} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Firewood</h6>
          </div>
        </div>
        <div className="card p-0" data-name="firewood">
          <img src={img11} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Firewood</h6>
          </div>
        </div>
        <div className="card p-0" data-name="firewood">
          <img src={img12} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Firewood</h6>
          </div>
        </div>
        <div className="card p-0" data-name="biomass_pellets">
          <img src={img13} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Biomass Pellets</h6>
          </div>
        </div>
        <div className="card p-0" data-name="biomass_briquette">
          <img src={img14} alt="img" />
          <div className="card-body">
            <h6 className="card-title">Biomass Briquette</h6>
          </div>
        </div>
        {/* Repeat cards as per your original structure */}
      </div>
    </div>
  );
}

export default Gallery;
