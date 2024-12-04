import React, { useState }  from 'react';
import AlertRed from './AlertRed';
import AlertGreen from './AlertGreen';


interface CarProps {
  car: {
    id: number;
    name: string;
    fuel: string;
    transmission: string;
    rating: number;
    description: string;
    images: string[];
    type: string;
    price: number;
  };
}



const GarageCarCard: React.FC<CarProps> = ({ car }) => {

  const [alertRedState, setAlertRedState] = useState(false);
  const [alertGreenState, setAlertGreenState] = useState(false);

  const [alertRedMsg, setAlertRedMsg] = useState('');
  const [alertGreenMsg, setAlertGreenMsg] = useState('');


  const url = process.env.NEXT_PUBLIC_URI_API;

  const handleBookNow = async () => {
    const email = localStorage.getItem('email');
    if (!email) {
      
      setAlertRedState(true)
      return;
    }

    try {
      const response = await fetch(`${url}/car/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          carname: car.name,
          fuel: car.fuel,
          transmission: car.transmission,
          rating: car.rating,
          description: car.description,
          images: car.images,
          type: car.type,
          price: car.price
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // alert(data.message);
        setAlertGreenState(true)
        setAlertGreenMsg(data.message)
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Server error:', err);
      alert('Server error, please try again later.');
    }
  };

  const handleCloseAlertRed = () => {
    setAlertRedState(false);

  };

  const handleCloseAlertGreen = () => {
    setAlertGreenState(false);
  };

  return (
    <>
      {alertGreenState && <AlertGreen message={alertGreenMsg} onClose={handleCloseAlertGreen} />}
      {alertRedState && <AlertRed message={"Please Login to Book a car"} onClose={handleCloseAlertRed} />}

    <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300 p-4 m-4 h-auto bg-white transition-transform transform ">
      <div className="absolute top-0 right-0 flex items-center bg-gray-700 text-white font-semibold font-mono text-lg rounded-full px-2 py-1 mt-2 mr-2 z-10">
        {(car.type)}
      </div>
      <div className="flex gap-2">
        {car.images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            className={`w-1/4 h-32 object-cover transition-transform transform hover:scale-125 ${index === 3 ? 'pr-6' : ''}`}
            src={image}
            alt={`Car Image ${index + 1}`}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-opacity-30 p-6">
        <div className="flex justify-between items-start mt-4 ml-5">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 font-serif">{car.name}</h3>
            <p className="text-gray-600 text-sm mt-2 font-medium">{car.description}</p>
          </div>

          <div className="px-6 pt-4 pb-2 flex flex-wrap items-start">
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{car.fuel}</span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{car.transmission}</span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{`Rating: ${car.rating}`} <i className="fas fa-star text-yellow-500"></i></span>
          </div>
        </div>

        <div className="flex mt-4 justify-center items-center space-x-4">
          <span className="text-gray-900 font-bold text-lg">${car.price}</span>
          <button
            onClick={handleBookNow}
            className="bg-gray-900 text-white py-2 rounded-full font-bold font-serif hover:bg-gray-800 px-10 transition duration-300 hover:scale-110"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default GarageCarCard;
