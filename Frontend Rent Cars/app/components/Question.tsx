import React from "react";
import Link from "next/link"; // Import Link from Next.js

const carsForSale = [
  { name: "2025 Chevrolet Silverado 1500 for sale", url: "/cars/chevrolet-silverado-1500-2025" },
  { name: "2024 Ford F-150 for sale", url: "/cars/ford-f150-2024" },
  { name: "2025 Ford Mustang for sale", url: "/cars/ford-mustang-2025" },
  { name: "2024 Ford Ranger for sale", url: "/cars/ford-ranger-2024" },
  { name: "2025 GMC Sierra 1500 for sale", url: "/cars/gmc-sierra-1500-2025" },
  { name: "2024 Toyota Tacoma for sale", url: "/cars/toyota-tacoma-2024" },
  { name: "2025 Tesla Model 3 for sale", url: "/cars/tesla-model-3-2025" },
  { name: "2024 Honda Accord for sale", url: "/cars/honda-accord-2024" },
  { name: "2025 Nissan Altima for sale", url: "/cars/nissan-altima-2025" },
  { name: "2024 BMW X5 for sale", url: "/cars/bmw-x5-2024" },
  { name: "2025 Audi Q5 for sale", url: "/cars/audi-q5-2025" },
  { name: "2024 Jeep Grand Cherokee for sale", url: "/cars/jeep-grand-cherokee-2024" },
  { name: "2025 Mercedes-Benz C-Class for sale", url: "/cars/mercedes-benz-c-class-2025" },
  { name: "2024 Subaru Outback for sale", url: "/cars/subaru-outback-2024" },
  { name: "2025 Dodge Charger for sale", url: "/cars/dodge-charger-2025" },
  { name: "2024 Lexus RX 350 for sale", url: "/cars/lexus-rx-350-2024" },
  { name: "2025 Hyundai Tucson for sale", url: "/cars/hyundai-tucson-2025" },
  { name: "2024 Kia Sorento for sale", url: "/cars/kia-sorento-2024" },
  { name: "2025 Volkswagen Tiguan for sale", url: "/cars/volkswagen-tiguan-2025" },
  { name: "2024 Chevrolet Malibu for sale", url: "/cars/chevrolet-malibu-2024" },
];


const Badge: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <Link href={url} passHref>
      <span className="bg-gray-500 text-white text-sm font-medium mr-2 mb-2 px-3 py-1 rounded shadow-md hover:shadow-lg transition-shadow duration-200 inline-block">
        {text}
      </span>
    </Link>
  );
};

const Question = () => {
  return (
    <div className="bg-grey-20 py-20">
      <div>
      <div className="content-container mx-auto px-10">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Popular Searches</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the most sought-after cars currently available for sale.
        </p>

        <div className="flex flex-wrap">
          {carsForSale.map((car, index) => (
            <Badge key={index} text={car.name} url={car.url} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Question;