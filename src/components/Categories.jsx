import React from 'react';

const CategoryItem = ({ name, image }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-32 h-32 mx-auto mb-2 rounded-full object-cover" />
    <h3 className="font-semibold">{name}</h3>
  </div>
);

const Categories = () => {
  const categories = [
    { name: 'Home & Kitchen', image: '/placeholder-home.jpg' },
    { name: 'Personal Care', image: '/placeholder-personal.jpg' },
    { name: 'Cleaning', image: '/placeholder-cleaning.jpg' },
    { name: 'Paper Goods', image: '/placeholder-paper.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;