import React, {useState} from "react";
import AlertRed from './AlertRed';
import AlertGreen from './AlertGreen';
import { useRouter } from 'next/navigation'

interface CarProps {
  car: {
    _id: number;
    carname: string;
    fuel: string;
    transmission: string;
    rating: number;
    description: string;
    images: string[];
    type: string;
    price: number;
  };
}


const OrderCarCards: React.FC<CarProps> = ({ car }) => {

    const [alertRedState, setAlertRedState] = useState(false);
  const [alertGreenState, setAlertGreenState] = useState(false);

  const router = useRouter();

  const [alertRedMsg, setAlertRedMsg] = useState('');
  const [alertGreenMsg, setAlertGreenMsg] = useState('');


  const url = process.env.NEXT_PUBLIC_URI_API;

  const handleCancelBooking = async (carId: number) => {
    const email = localStorage.getItem('email'); // Ensure the user is logged in
    if (!email) {
      setAlertRedState(true);
      setAlertRedMsg('You must be logged in to cancel a booking');
      return;
    }
  
    try {
      const response = await fetch(`${url}/car/delete/${carId}`, {
        method: 'DELETE', // Use DELETE method
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setAlertGreenState(true);
        setAlertGreenMsg(data.message); // Success message from the server
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
    router.push('/garage');
  };



  return (

    <>
      {alertGreenState && <AlertGreen message={alertGreenMsg} onClose={handleCloseAlertGreen} />}
      {alertRedState && <AlertRed message={"Please Login to Book a car"} onClose={handleCloseAlertRed} />}

    <div className="flex justify-center items-center p-4">
      <figure className="flex w-4/5 bg-slate-100 rounded-xl overflow-hidden shadow-lg dark:bg-slate-800">
        {/* Left: Car Image */}
        <img
          className="w-1/2 h-full object-cover"
          src={car.images[0]}
          alt={car.carname}
        />
        {/* Right: Content */}
        <div className="flex flex-col justify-between p-6 space-y-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-opacity-30">
          {/* Car Description */}

          <h3 className="text-2xl font-bold text-gray-900 font-serif ">{car.carname}</h3>
            <p className=" mt-0 text-base font-medium font-mono text-slate-700 dark:text-slate-300">
              {car.description}
            </p>
    
          {/* Car Details */}
          <div className="pb-2 flex flex-wrap items-start mt-0 mb-0">
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{car.fuel}</span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{car.transmission}</span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{`${car.rating}`} <i className="fas fa-star text-yellow-500"></i></span>
          </div>

          <div className="flex mt-4 space-x-4">
          <button
            onClick={() => handleCancelBooking(car._id)}
            className="bg-gray-900 text-white py-2 rounded-full font-bold font-serif hover:bg-gray-800 px-10 transition duration-300 hover:scale-110"
          >
            Cancel Order
          </button>
        </div>


        </div>

        

      </figure>
    </div>
    </>
  );
};

export default OrderCarCards;
