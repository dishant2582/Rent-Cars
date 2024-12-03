import React from "react";

const RentalServiceSection = () => {
  return (
    <div className="container mx-auto py-10 px-5">
          {/* Second Section */}
          <div className="flex items-center justify-center">
  {/* Text Section */}
  <div className="text-center lg:text-left">
    <h4 className="text-dark text-center text-black font-serif text-xl lg:text-2xl font-bold capitalize mb-3">
      Our Service is Built with Trust
    </h4>
    <p className="text-gray-600 font-serif mb-10">
    Our service prioritizes your satisfaction with a foundation of trust and reliability. Experience quality and professionalism that exceeds expectations at every step.
    </p>
  </div>
</div>


      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        {/* Image Section */}
        <div className="lg:w-7/12">
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGNhcnxlbnwwfHx8fDE2MzE2NzIwOTU&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=1000&amp;h=650&amp;fit=crop"
            className="w-full rounded-lg"
            alt="Rental Service"
          />
        </div>

        {/* Card Section */}
        <div className="lg:w-5/12 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-primary text-sm font-bold mb-2">Rent IT Cars & Much More</h2>
          <h3 className="text-dark text-2xl lg:text-3xl font-bold font-serif capitalize mb-3">
            Experience a Rental Service Like Never Before
          </h3>
          <div className="bg-primary w-12 h-1 mb-4"></div>
          <p className="text-gray-700 mb-5">
          Enjoy a seamless and reliable rental service tailored to your needs. From easy booking to exceptional support, we ensure every journey is smooth and memorable. Let us redefine the way you rent, combining trust, convenience, and affordability. </p>
          <a
            href="#"
            className="inline-block bg-primary text-white font-semibold rounded-lg py-2 px-5 shadow-md hover:bg-primary-dark transition"
          >
            Learn More
          </a>
        </div>
      </div>

  

    </div>
  );
};

export default RentalServiceSection;
