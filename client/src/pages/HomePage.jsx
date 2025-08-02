import React from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      {/* Other sections like Best Sellers, Offers, etc. will go here */}
    </>
  );
};

export default HomePage;
