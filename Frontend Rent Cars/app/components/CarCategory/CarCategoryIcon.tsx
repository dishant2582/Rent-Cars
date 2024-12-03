import React from "react";
import Image from "next/image";

const categoryData = [
  {
    title: "Economy",
    url: "/economy-cars",
    icon: "/images/categories/sedan.png", // Path to the SVG file for Economy
  },
  {
    title: "SUV",
    url: "/suv-car",
    icon: "/images/categories/suv.svg", // Path to the SVG file for SUV
  },  
  {
    title: "Electric",
    url: "/electric-cars",
    icon: "/images/categories/electric.png", // Path to the SVG file for Electric
  },
  {
    title: "Hatchback",
    url: "/hatchback-car",
    icon: "/images/categories/hatchback.svg", // Path to the SVG file for Luxury
  },  
  {
    title: "Coupe",
    url: "/coupe",
    icon: "/images/categories/coupe.svg", // Path to the SVG file for Convertible
  },
  {
    title: "Convertible",
    url: "/convertible-car",
    icon: "/images/categories/convertible.png", // Path to the SVG file for Convertible
  },
  {
    title: "Sports",
    url: "/sports-cars",
    icon: "/images/categories/sports.svg", // Path to the SVG file for Sports
  },
  {
    title: "Supercar",
    url: "/sports-cars-in-supercar",
    icon: "/images/categories/supercar.png", // Path to the SVG file for Supercar
  }
];

const CarCategory: React.FC = () => {
  return (
    <div className="py-16 content-container mx-auto">
      <h1 className="text-xl font-semibold mb-6">Popular /categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData.map((category) => (
          <a
            key={category.title}
            href={category.url}
            className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <Image
              src={category.icon}
              alt={category.title}
              width={120}
              height={120}
              className="w-32 h-32" // Adjust size as needed
            />
            <h2 className="mt-2 text-lg font-medium">{category.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CarCategory;