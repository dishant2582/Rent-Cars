import React from 'react';

const YourGarage = () => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-4xl mx-auto border border-gray-200 flex flex-col lg:flex-row transition-transform transform hover:scale-105">
      {/* Content Section (Text on the Left) */}
      <div className="text-gray-700 lg:w-1/2 pr-6 mb-6 lg:mb-0">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center lg:text-left">
          Your Garage
        </h2>
        <h3 className="text-2xl font-semibold mb-3">
          Add Your Car. Track Its Value.
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Add your car to Your Garage to track its market value and cash in when
          the time is right to sell. 
          <a 
            href="/profile/your-garage" 
            className="text-blue-600 font-medium hover:text-blue-800 ml-1 transition-colors duration-200"
          >
            Learn more
          </a>.
        </p>

        {/* Slot for Intake Form */}
        <div className="mb-6">
          <slot name="intake-form"></slot>
        </div>

        {/* Sign-in Section */}
        <p className="text-center lg:text-left text-gray-700">
          Already have an account?
          <button 
            id="sign-in" 
            className="text-blue-600 font-medium hover:text-blue-800 ml-1 underline transition-colors duration-200"
          >
            Sign in
          </button>.
        </p>
      </div>

      {/* Image Section (Right) */}
      <div className="lg:w-1/2">
        <img 
          src="https://www.cars.com/images/garage-landing/garage-hero.webp" 
          alt="Garage" 
          loading="lazy" 
          className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default YourGarage;