import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => (
  <div className="relative">
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
      dynamicHeight={false}
    >
      <div>
        <img src="https://img.freepik.com/free-photo/medium-shot-woman-wearing-jacket_23-2149190433.jpg?t=st=1733683943~exp=1733687543~hmac=bf2c18a607fb6643f110e882aa16c750348bb7f22113a7b712201f1938cb73fa&w=826" alt="Sale" />
        <p className="legend bg-black bg-opacity-50 text-white">Summer Sale - Up to 50% Off</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-looking-ukranian-shirt_23-2149318812.jpg?t=st=1733683900~exp=1733687500~hmac=a93f2f63f9929a19b91df0b3c40b759baf201fbeeaae04afb54a3f5e539bcf6b&w=826" alt="New Arrivals" />
        <p className="legend bg-black bg-opacity-50 text-white">Explore New Arrivals</p>
      </div>
    </Carousel>
  </div>
);

export default HeroCarousel;
