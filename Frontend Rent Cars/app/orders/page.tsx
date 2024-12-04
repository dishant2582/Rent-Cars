"use client"

import React, { useEffect, useState } from 'react';
import AlertRed from '../components/AlertRed';
import AlertGreen from '../components/AlertGreen';
import GarageCarCard from '../components/GarageCarCards';
import OrderCarCards from '../components/OrderCarCards';

interface Car {
  _id: number;
  carname: string;
  fuel: string;
  transmission: string;
  rating: number;
  description: string;
  images: string[];
  type: string;
  price: number;
}

const Garage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [alertRedState, setAlertRedState] = useState(false);
  const [alertRedMsg, setAlertRedMsg] = useState('');

  const url = process.env.NEXT_PUBLIC_URI_API;

  useEffect(() => {
    const fetchCars = async () => {
      const email = localStorage.getItem('email');
      if (!email) {
        setAlertRedState(true);
        setAlertRedMsg('Please Log in to view your Order.');
        return;
      }

      try {
        const response = await fetch(`${url}/car/fetch/email/${email}`);
        const data = await response.json();

        if (response.ok) {
          setCars(data);
        } else {
          setAlertRedState(true);
          setAlertRedMsg(data.message);
        }
      } catch (err) {
        console.error('Server error:', err);
        setAlertRedState(true);
        setAlertRedMsg('Server error, please try again later.');
      }
    };

    fetchCars();
  }, []);

  const handleCloseAlertRed = () => {
    setAlertRedState(false);
  };

  return (
    <div>
      {alertRedState && <AlertRed message={alertRedMsg} onClose={handleCloseAlertRed} />}
      {cars.length === 0 ? (
        <div className="text-center  text-gray-500 font-bold mt-10">
          <div className="h-screen w-full flex items-center justify-center dark:bg-gray-900">

  <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">


    <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

      <div className="mb-4 md:text-lg text-gray-400">
        <p>You have not booked any cars yet.</p>
      </div>
    </div>

  </div>

</div>

        </div>
      ) : (
        <div className="">
          {cars.map((car) => (
            <OrderCarCards  car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Garage;
