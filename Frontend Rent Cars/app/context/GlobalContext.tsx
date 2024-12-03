"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface GlobalContextType {
  logOutBtn: boolean;
  setlogOutBtn: (state: boolean) => void;
  // Add more global variables and functions here as needed
}

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logOutBtn, setlogOutBtn] = useState(false);

  return (
    <GlobalContext.Provider value={{ logOutBtn, setlogOutBtn }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
