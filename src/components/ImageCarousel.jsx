import React from "react";
import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className="rounded-md overflow-hidden">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
