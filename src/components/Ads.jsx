import React from 'react';
import '/src/styles/ads.css';  
import productImage from '../assets/icons8-website-96.png'; 


const Ads = () => {
  return (
    <div className="hero-ad" role="region" aria-label="Promotional banner">
      <div className="left">
        <div className="hero-img-wrapper">
          <img src={productImage} alt="Product" />
        </div>

        <div className="copy">
          <h3>Unlock 20% off — Start growing today</h3>
          <p>Fast, simple tools to build and scale your website. No credit card required.</p>
        </div>
      </div>
      <div>
        <a
          className="cta"
          href="https://example.com/landing?utm_source=site_ad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get 20% Off
        </a>
      </div>
    </div>
  );
};

export default Ads;
