import React from "react";

const AboutPageCards = () => {
  return (

    <div>

        {/* <h1 className="text-center text-6xl font-bold font-serif mt-10 mb-10">About US</h1> */}
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-10">



      <div className="container mx-auto">
        
        {/* Card 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row">
          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Story
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            We started with a simple vision: to make car rental easier, more affordable, and accessible for everyone. With years of experience in the automotive and travel industries, we pride ourselves on providing an extensive fleet of cars to suit every need. From compact cars to luxury vehicles, our goal is to offer the best selection with flexible options for both short and long-term rentals.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="Card 1"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row-reverse">
          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://images01.nicepagecdn.com/page/56/26/web-page-design-preview-56264.jpg"
              
              alt="Card 2"
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            At Rent IT, customer satisfaction is our top priority. We offer a hassle-free booking experience, competitive pricing, and a variety of well-maintained vehicles. Whether you're traveling for business or leisure, our fleet of cars ensures you have a smooth, comfortable journey. Our commitment to reliability and convenience sets us apart from the rest.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row">
          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Fleet
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            Our diverse fleet includes a wide range of vehicles, from economy cars to premium models, all maintained to the highest standards. Whether you need a car for a weekend getaway or a spacious vehicle for a family trip, we have the perfect option for you. All our cars are equipped with modern features to enhance your driving experience.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Car-Rentals-in-India.jpg"
              alt="Card 3"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row-reverse">
          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://th.bing.com/th/id/OIP.TJkSFyZvYvuT81GfOVEBcQAAAA?rs=1&pid=ImgDetMain"
              alt="Card 4"
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Affordable Rentals
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            We believe that renting a car shouldn't break the bank. With flexible pricing and a variety of rental packages, we ensure that you get the best value for your money. Our transparent pricing with no hidden fees allows you to plan your trip without any surprises. Explore our affordable rental options today!
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row">
          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Safety First
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            Safety is our number one priority. All our vehicles undergo thorough inspections and are regularly serviced to ensure they meet the highest safety standards. We also provide 24/7 roadside assistance to give you peace of mind, wherever your journey takes you. Rent with confidence knowing that we’ve got your back on the road.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://th.bing.com/th/id/OIP.MyAsmiotk5CztB5MFjGbIAHaE8?rs=1&pid=ImgDetMain"
              alt="Card 5"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Card 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 md:flex-row-reverse">
          {/* Image Section */}
          <div className="mt-12 md:mt-0">
            <img
              src="https://www.easirent.com/wp-content/uploads/2022/02/Corporate_Page_Banner.jpg"
              alt="Card 6"
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Customer Testimonials
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            Don't just take our word for it! Hear from our happy customers who have trusted us for their car rental needs. From easy booking processes to reliable vehicles and exceptional customer service, our clients consistently rave about their experiences with us. Read their stories and see why we're the top choice for car rentals in the area.
            </p>
          </div>
        </div>

      </div>
    </section>

    </div>
  );
};

export default AboutPageCards;
