import React from 'react';
import ProductCard from './ProductCard';

// Sample product data
const sampleProducts = [
  { id: 1, name: 'Amul Gold Milk 500ml', price: 30, image: '/images/milk_product.jpg', offer: '10% OFF' },
  { id: 2, name: 'Parle-G Original Glucose Biscuits 80g', price: 10, image: '/images/biscuit_product.jpg', offer: '' },
  { id: 3, name: 'Cadbury Dairy Milk Chocolate 50g', price: 20, image: '/images/chocolate_product.jpg', offer: 'Buy 2 Get 1' },
  { id: 4, name: 'Mother Dairy Plain Dahi 200g', price: 25, image: '/images/dahi_product.jpg', offer: '' },
  { id: 5, name: 'Lays Chips American Style 52g', price: 20, image: '/images/chips_product.jpg', offer: 'Extra 5%' },
  // Add more sample products here...
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
