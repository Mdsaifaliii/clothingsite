import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-md mb-4" />

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover cursor-pointer border-2 ${
              image === selectedImage ? "border-yellow-400" : "border-gray-300"
            } rounded-md`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
