

import React from "react";

const images = [
  {
    url: "https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png",
    name: "BMW",
    href: "/overview/bmw/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png",
    name: "Audi",
    href: "/overview/audi/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png",
    name: "Mercedes",
    href: "/overview/mercedes/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png",
    name: "Lexus",
    href: "/overview/tesla/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png",
    name: "Toyota",
    href: "/overview/toyota/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/1067x384_full_color/aa5732acfd1e5b4d/Ford.png",
    name: "Ford",
    href: "/overview/ford/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png",
    name: "Honda",
    href: "/overview/honda/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo_text/743x384_full_color/5391e0d2230f029e/Chevrolet.png",
    name: "Chevrolet",
    href: "/overview/chevrolet/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png",
    name: "Hyundai",
    href: "/overview/hyundai/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png",
    name: "Kia",
    href: "/overview/kia/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/874x384_full_color/519add2e55e837af/MINI.png",
    name: "Mini",
    href: "/overview/mazda/"
  },
  {
    url: "https://static.tcimg.net/vehicles/logo/450x384_full_color/688cbf406361c9c1/Nissan.png",
    name: "Nissan",
    href: "/overview/nissan/"
  },
];

const ShopByBrand = () => {
  return (
    <div className="bg-zinc-50 overflow-hidden">
    <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-screen flex flex-col justify-center">
      <div className="prose text-black-500 prose-sm prose-headings:font-normal prose-headings:text-xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mt-15 mb-2 font-serif">Shop By Brand</h1>
        </div>
      </div>
  
      {/* Grid container for images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {images.map((image, index) => (
    <a
      key={index}
      href={image.href}
      className="block p-1 border border-gray-300 rounded-lg hover:shadow-md transform transition-all duration-300"
    >
      {/* Card container */}
      <div className="flex justify-center items-center">
        <img
          src={image.url}
          className="rounded-lg duration-500 hover:-translate-y-8 h-20 w-20 object-contain hover:scale-125 transform origin-bottom"
          alt={image.name}
        />
      </div>
    </a>
  ))}
</div>

    </div>
  </div>
  
  );
};

export default ShopByBrand;



