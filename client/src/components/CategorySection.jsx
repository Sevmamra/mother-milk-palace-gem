import React from 'react';

const categories = [
  { name: 'Milk, Dairy', icon: '/images/category_milk.svg' },
  { name: 'Packaged Food', icon: '/images/category_packaged_food.svg' },
  { name: 'Ice creams & More', icon: '/images/category_icecream.svg' },
  { name: 'Sweet Cravings', icon: '/images/category_sweets.svg' },
  { name: 'Cold Drinks & Juices', icon: '/images/category_drinks.svg' },
  { name: 'Munchies', icon: '/images/category_munchies.svg' },
  { name: 'Biscuits & Bakery', icon: '/images/category_biscuits.svg' },
  { name: 'Breakfast & Sauces', icon: '/images/category_breakfast.svg' },
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <a
            href={`/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
