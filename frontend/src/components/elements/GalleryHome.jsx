import React from "react";
import { Link } from "react-router-dom";

// Import images
import img1 from "../../assets/image.png";
import img2 from "../../assets/images2.jpeg";
import img3 from "../../assets/images3.webp";
import img4 from "../../assets/images4.jpg";
import img5 from "../../assets/images5.jpeg";
import img6 from "../../assets/images6.jpeg";

function GalleryHome() {
  const previewImages = [img1, img5, img2]; // Show only 3 in preview

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10 text-center">
      <h1 className="text-[28px] sm:text-[48px] font-bold text-base4 tracking-wide font-poppins">
        Gallery
      </h1>
      <p className="mt-2 md:w-[720px] mx-auto text-[16px] sm:text-[20px] font-medium text-base4 font-poppins">
        Cherishing the remarkable and unforgettable moments at TPIC that define our journey of innovation and entrepreneurship.
      </p>

      {/* Image Preview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {previewImages.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg border-2 border-slate-400 shadow-md shadow-slate-500 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`gallery-${idx}`}
              className="w-full h-[240px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 bg-base4 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          View Full Gallery
          <span className="text-xl">➔</span>
        </Link>
      </div>
    </div>
  );
}

export default GalleryHome;
