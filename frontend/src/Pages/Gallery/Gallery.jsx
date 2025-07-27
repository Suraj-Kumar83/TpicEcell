
import React from "react";

// Import all images
import img1 from "../../assets/event1b.jpg";
import img2 from "../../assets/event1c.jpg";
import img3 from "../../assets/image.png";
import img4 from "../../assets/images2.jpeg";
import img5 from "../../assets/images3.webp";
import img6 from "../../assets/images4.jpg";
import img7 from "../../assets/images5.jpeg";
import img8 from "../../assets/images6.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
  return (
    <div className="w-full py-10 px-4 sm:px-10 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
        Event Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
