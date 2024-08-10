import React from 'react';

const TestimonialCard = ({ name, image, role, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-800 italic">"{quote}"</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarita Singh",
      image: "https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg",
      role: "Business Owner",
      quote: "Nimyle 5L has been a game-changer in my cleaning routine. It's eco-friendly and effective, making it a great choice for sustainable living."
    },
    {
      name: "Deepak Kumar",
      image: "https://media.istockphoto.com/id/1333001232/photo/portrait-of-indian-man-face-outdoors-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Ne-OChwAEFF5U7yxOwUUqA8ELrJ1WCYho4RkW9v360I=",
      role: "Business Owner",
      quote: "The Nimyle 5L Lemongrass variant stands out for its quality and sustainability. It's a perfect blend of eco-friendliness and effectiveness."
    },
    {
      name: "Vinita Singh",
      image: "https://www.shutterstock.com/image-photo/portrait-happy-young-indian-woman-260nw-96789226.jpg",
      role: "Business Owner",
      quote: "I love the Nimyle 5L + Nimeasy combo. It's safe for my family and simplifies my cleaning tasks, making it a must-have in our home."
    }
  ];
  

  return (
    <section className="pt-20 pb-40 px-2 md:px-6 lg:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">MOMENT OF TRUTH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;