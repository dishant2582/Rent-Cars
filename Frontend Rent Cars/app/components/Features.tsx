import React from "react";

const features = [
    {
      icon: "fa-car",
      title: "Wide Range of Cars",
      description:
        "Choose from a variety of cars, from economy to luxury models, to fit your needs and budget.",
      bgColor: "bg-purple-200",
    },
    {
      icon: "fa-calendar-check",
      title: "Easy Booking",
      description:
        "Book your car rental in just a few clicks with our simple and user-friendly booking system.",
      bgColor: "bg-teal-200",
    },
    {
      icon: "fa-shield-alt",
      title: "Insurance & Protection",
      description:
        "Drive with peace of mind, knowing that we offer comprehensive insurance and protection options.",
      bgColor: "bg-yellow-200",
    },
    {
      icon: "fa-map-marker-alt",
      title: "Pick-up & Drop-off Locations",
      description:
        "Convenient pick-up and drop-off locations to make your car rental experience smooth and hassle-free.",
      bgColor: "bg-red-200",
    },
    {
      icon: "fa-clock",
      title: "Flexible Rental Periods",
      description:
        "Rent a car for as long as you need, whether it’s for a day, week, or month, with no hidden fees.",
      bgColor: "bg-green-200",
    },
    {
      icon: "fa-star",
      title: "Customer Reviews",
      description:
        "Read real reviews from our customers to find out why we are the preferred car rental service.",
      bgColor: "bg-orange-200",
    },
  ];
  

const Features = () => {
  return (
    <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-serif">
          Explore Our Car Rental Features
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
          Discover convenient and flexible car rental services that suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`md:p-8 lg:p-14 ${index % 2 === 0 ? "" : "md:border-l md:border-gray-200"} flex flex-col justify-center items-center`}
            >
              <div className={`w-14 h-14 rounded-full ${feature.bgColor} flex justify-center items-center`}>
                <i className={`fa-solid ${feature.icon} text-3xl text-gray-900`}></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-5 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
