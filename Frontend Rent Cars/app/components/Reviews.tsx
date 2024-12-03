import React from "react";

const reviewsData = [
  {
    name: "Ravi Kumar",
    profession: "Travel Enthusiast",
    review:
      "The service was fantastic! The car was in excellent condition, clean, and drove like a dream. Highly recommend for a hassle-free rental experience.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Sharma",
    profession: "Marketing Professional",
    review:
      "I was amazed by the variety of cars. I rented a luxury sedan for a business trip, and it exceeded my expectations. The staff was professional and helpful.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vijay Singh",
    profession: "Software Developer",
    review:
      "Affordable and reliable! The SUV I rented for a family trip was perfect for long drives, with plenty of space and comfort.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Priya Patel",
    profession: "Mobile Developer",
    review:
      "The transparent pricing and easy booking process made it stress-free. The car was well-maintained, and the support staff was helpful. Highly recommend it!",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    name: "Arjun Mehta",
    profession: "Manager",
    review:
      "Customer service was excellent! My car was ready on time, and the return process was quick and efficient. Great value for money.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Sneha Rao",
    profession: "Product Designer",
    review:
      "This was my first time renting a car, and it couldn’t have been better. The staff was friendly, and the car was spotless. A perfect experience!",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
      <div className="py-4 text-center md:py-8">
        <p className="mt-10 text-gray-900 text-5xl font-serif font-bold">
          Our Happy Customers
        </p>
      </div>

      <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src={review.image}
                alt={review.name}
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700">
                  {review.name}
                </h6>
                <p className="text-sm text-gray-500">{review.profession}</p>
              </div>
            </div>
            <p className="mt-8">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
