import React from "react";

const TopCars = () => {
    const cars = [
        {
          name: "Hyundai Creta 2017",
          image:
            "https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGh5dW5kYWl8ZW58MHx8fHwxNjMxNjk3ODI1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop",
          rating: 4.7,
          reviews: 245,
          price: "₹1440/day",
          about: "A perfect compact SUV, offering a comfortable ride, ample storage space, and top-tier performance for city and highway driving."
        },
        {
          name: "Honda Accord 2018",
          image:
            "https://images.unsplash.com/photo-1619976215249-0b68cef412b0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE2fHxob25kYXxlbnwwfHx8fDE2MzE2OTcxODY&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop",
          rating: 4.4,
          reviews: 654,
          price: "₹1565/day",
          about: "A luxurious sedan with advanced safety features, smooth handling, and a premium interior for a high-end driving experience."
        },
        {
          name: "BMW M3 2010",
          image:
            "https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxN3x8Y2FyJTIwc3V2fGVufDB8fHx8MTYzMTY4NTkwNg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop",
          rating: 4.9,
          reviews: 456,
          price: "₹1245/day",
          about: "A classic sports car that blends performance and style, perfect for those who crave speed and luxury in one package."
        }
      ];
      

  return (
    <div className="container mx-auto py-10">
      {/* Heading Section */}
      <div className="mb-6 text-center">
        <h2 className="text-grey-500 text-lg font-medium uppercase">Our Top Cars</h2>
        <h3 className="text-gray-800 text-3xl font-bold font-serif mb-4">Cars For All Your Needs</h3>
        <div className="bg-slate-500 h-1 w-16 mx-auto mb-3"></div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <a href="#">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            </a>
            <div className="p-4">
              <h4 className="text-gray-800 text-lg font-semibold mb-2">
                <a href="#" className="hover:text-grey-500">{car.name}</a>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {car.about}
              </p>
              <hr className="my-3" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-700">{car.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-grey-500 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                  </svg>
                  <span className="text-gray-600">({car.reviews} reviews)</span>
                </div>
                <span className="text-gray-800 font-semibold">{car.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <a
          href="/garage"
          className="inline-block bg-primary text-white font-semibold rounded-lg py-2 px-5 shadow-md hover:bg-primary-dark transition"
        >
          View All Cars
        </a>
      </div>
    </div>
  );
};

export default TopCars;
