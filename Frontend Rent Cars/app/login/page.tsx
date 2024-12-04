"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import AlertGreen from '../components/AlertGreen';
import AlertRed from '../components/AlertRed';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const { logOutBtn, setlogOutBtn } = useGlobalContext();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertRedState, setAlertRedState] = useState(false);
  const [alertGreenState, setAlertGreenState] = useState(false);

  const [alertRedMsg, setAlertRedMsg] = useState('');
  const [alertGreenMsg, setAlertGreenMsg] = useState('');

  const url = process.env.NEXT_PUBLIC_URI_API;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setAlertGreenMsg(data.message);
      setAlertGreenState(true);
      localStorage.setItem('email', data.email);
      setlogOutBtn(true);
    } else {
      setAlertRedMsg(data.message);
      setAlertRedState(true);
    }
  };

  const handleCloseAlertRed = () => {
    setAlertRedState(false);
  };

  const handleCloseAlertGreen = () => {
    setAlertGreenState(false);
    router.push('/'); // Navigate to the home page
  };

  return (
    <>
      {alertGreenState && <AlertGreen message={alertGreenMsg} onClose={handleCloseAlertGreen} />}
      {alertRedState && <AlertRed message={alertRedMsg} onClose={handleCloseAlertRed} />}
      
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/21/81/n1I4oD.jpg')", fontFamily: 'Poppins, sans-serif' }}>
        <div className="relative w-1/4 opacity-90 bg-transparent border-2 border-white/50 rounded-2xl backdrop-blur-xl flex justify-center items-center p-8 transition-all duration-500">
          <form className="w-full" onSubmit={handleLogin}>
            <h1 className="text-2xl text-white text-center mb-6">Login</h1>
            
            {/* Email Field */}
            <div className="relative mb-6 border-b-2 border-white">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute right-2 top-2/4 transform -translate-y-1/2 text-white text-lg"
              />
              <input
                name="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-10 bg-transparent border-none outline-none text-white text-base px-2 placeholder-transparent peer"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-2 transform -translate-y-1/2 text-white text-base pointer-events-none transition-all duration-500 ${
                  email ? 'top-[-0.8rem] text-sm text-gray-300' : 'top-1/2'
                } peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-[-0.8rem] peer-focus:text-sm peer-focus:text-gray-300`}
              >
                Email
              </label>
            </div>
            
            {/* Password Field */}
            <div className="relative mb-6 border-b-2 border-white">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute right-2 top-2/4 transform -translate-y-1/2 text-white text-lg"
              />
              <input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-10 bg-transparent border-none outline-none text-white text-base px-2 placeholder-transparent peer"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className={`absolute left-2 transform -translate-y-1/2 text-white text-base pointer-events-none transition-all duration-500 ${
                  password ? 'top-[-0.8rem] text-sm text-gray-300' : 'top-1/2'
                } peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-[-0.8rem] peer-focus:text-sm peer-focus:text-gray-300`}
              >
                Password
              </label>
            </div>

            {/* Forgot Password */}
            <div className="text-center mb-6">
              <p className="text-sm text-white">
                <a href="#" className="hover:underline hover:text-gray-300">Forget Password? </a>
              </p>
            </div>
            
            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-10 rounded-full bg-white text-black font-semibold text-base transition-all duration-300 hover:bg-white/50"
            >
              Log in
            </button>
            
            {/* Register Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-white">
                Don't have an account? 
              </p>
              <a href="/signup" className="text-white mt-10 pt-5 font-bold hover:underline hover:text-gray-300 mx-5">Register!!</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
