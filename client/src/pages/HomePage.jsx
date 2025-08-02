import React from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
