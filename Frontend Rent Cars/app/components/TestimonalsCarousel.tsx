"use client"
import React, { useState, useEffect } from "react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "https://i.pinimg.com/originals/b3/2c/9c/b32c9c4854abc5925c2d64ee046f02f7.jpg", 
      quote: "Renting from this company was a breeze! The car was clean, well-maintained, and ready to go. Their service was fast, and the entire experience was seamless.",
      name: "Liam Johnson",
      role: "Car Rental User",
    },
    {
      image: "https://img.freepik.com/premium-photo/woman-suit-smiles-with-her-arms-crossed_898268-411.jpg", // Example image for another user
      quote: "The process was so easy! We booked the car, and it was ready to go when we arrived. Excellent customer service all the way!",
      name: "Sophia Carter",
      role: "Regular User",
    },
    {
      image: "https://th.bing.com/th/id/OIP.I5Cma3SGamZG09-tFiw_EQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain", // Example image for another user
      quote: "I’ve rented cars many times, but this was by far the best experience. Clean, easy, and affordable! Highly recommend it.",
      name: "James Smith",
      role: "Frequent Renter",
    },
    {
      image: "https://th.bing.com/th/id/OIP.5o2ucFPLppYOunqKa255fgHaHa?w=800&h=800&rs=1&pid=ImgDetMain", // Example image for another user
      quote: "The car was delivered on time, and the team was incredibly helpful throughout the entire rental process. A great service!",
      name: "Olivia Brown",
      role: "Business Traveler",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [testimonials.length]);

  return (
    <div className="container mx-auto py-5 bg-gray-950 mt-10">
      <div className="mb-4">
        <div>
          <h2 className="text-5xl font-bold text-yellow-500" style={{ color: 'rgb(255, 134, 0)' }}> Our Reviews </h2>
          <h3 className="text-4xl font-bold font-serif mb-3 text-white">
            What Our Customers Say About Us
          </h3>
          <div className=" h-1 w-16 mb-3" style={{ color: 'rgb(255, 134, 0)' }}></div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full px-3">
              <div className="flex">
                <div className="w-1/3 p-3">
                  <img
                    src={testimonial.image}
                    className="rounded-lg object-cover"
                    alt={`Customer ${index + 1}`}
                  />
                </div>
                <div className="w-2/3 p-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 mb-3"
                    style={{ color: 'rgb(255, 134, 0)' }}
                  >
                    <path d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z" />
                  </svg>
                  <p className="text-lg mb-4 text-gray-300">
                    {testimonial.quote}
                  </p>
                  <h4 className="font-bold text-lg" style={{ color: 'rgb(255, 134, 0)' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-white">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-yellow-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
