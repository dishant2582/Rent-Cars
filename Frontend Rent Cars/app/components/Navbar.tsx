"use client"; // This will tell Next.js to treat this file as client-side code

import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import Link from 'next/link'; // Add this import
import { useGlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faBox, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import AlertRed from './AlertRed';
import { useRouter } from 'next/navigation'


export default function Navbar() {

  const { logOutBtn, setlogOutBtn } = useGlobalContext();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");

  const [alertRedState, setAlertRedState] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const OnclickLogout = () =>{
    setlogOutBtn(false);
    setAlertRedState(true);
    localStorage.removeItem('email')
  };

  const handleCloseAlertRed = () => {
    setAlertRedState(false);
    router.push('/login');

  };

  return (
    <>
     {alertRedState && <AlertRed message={"You Are Log Out"} onClose={handleCloseAlertRed} />}

    <div className="sticky top-0 inset-x-0 z-50">
      <header className="relative h-16 mx-auto border-b bg-white border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 text-sm text-gray-700">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                width="100"
                height="60"
                src="https://th.bing.com/th/id/OIP.fDxs6KnOCbY9gxLgMkxHFwHaHa?rs=1&pid=ImgDetMain"
                alt="Logo"
                className="h-16 w-auto rounded-full"
              />
              <span className="text-lg font-semibold font-serif cursor-pointer">Rent IT</span>
            </div>

            {/* Menu */}
            <div className="hidden sm:flex items-center gap-6">
              {/* Navigation Links */}
              <Link href="/" className="flex items-center gap-2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faHome} className="text-lg" />
                Home
              </Link>

              <Link href="/garage" className="flex items-center gap-2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faCar} className="text-lg" />
                Garage
              </Link>

              <Link href="/orders" className="flex items-center gap-2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faBox} className="text-lg" />
                My Order
              </Link>

              <Link href="/about" className="flex items-center gap-2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
                About
              </Link>

              <Link href="/review" className="flex items-center gap-2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
                <FontAwesomeIcon icon={faStar} className="text-lg" />
                Review
              </Link>


            </div>
          </div>

          {/* Center Section */}
          <div className="flex items-center">
            <div className="relative w-full max-w-md">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchChange}
                className="bg-gray-100 py-2 rounded-3xl px-10 placeholder:text-sm w-96 border-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-gray-700 transition duration-200 shadow-sm focus:ring-1 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Wishlist Icon */}
            <CiHeart className="text-xl cursor-pointer hover:text-black" />

            {/* Signup/Login */}
            {logOutBtn ? (<p onClick={OnclickLogout} className="text-sm cursor-pointer hover:text-black" > Log Out </p>) : (<a href="/login" className="text-sm cursor-pointer hover:text-black" > Signup | Login </a>)}
          </div>
        </nav>
      </header>
    </div>
    </>
  );
}
