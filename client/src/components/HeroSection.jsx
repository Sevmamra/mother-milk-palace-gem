import React, { useState, useEffect } from 'react';
import '../assets/css/animations.css'; // Importing the animations

const banners = [
  {
    image: "/images/banner_1.jpg",
    heading: "Fresh Groceries, Delivered Fast",
    subheading: "Quality products at your doorstep in minutes.",
  },
  {
    image: "/images/banner_2.jpg",
    heading: "Daily Essentials at Great Prices",
    subheading: "Shop from a wide range of products.",
  },
];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mt-8">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${banner.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 slide-in-up">
              {banner.heading}
            </h1>
            <p className="text-base md:text-xl text-white font-semibold fade-in">
              {banner.subheading}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
