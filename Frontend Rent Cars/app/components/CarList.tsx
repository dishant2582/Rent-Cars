// // import React from "react"

// // interface CarTileProps {
// //   id: string
// //   year: string
// //   make: string
// //   model: string
// //   price: number
// //   mileage: string
// //   imageUrls: string[]
// //   stockNumber: string
// //   shippingLocation: string
// // }

// // const CarTile: React.FC<CarTileProps> = ({
// //   id,
// //   year,
// //   make,
// //   model,
// //   price,
// //   mileage,
// //   imageUrls,
// //   stockNumber,
// //   shippingLocation,
// // }) => {
// //   return (
// //     <article className="sc--car-tile car-tile" role="article" data-id={id}>
// //       <div
// //         className="car-tile-action-menu-content"
// //         style={{ top: "220.925px" }}
// //       >
// //         <ul>
// //           <li className="tile-menu-item--favorite">
// //             <button type="button">
// //               <svg
// //                 className="heart"
// //                 viewBox="0 0 24 24"
// //                 aria-hidden="true"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
// //               </svg>
// //               Add to favorites
// //             </button>
// //           </li>
// //           <li className="tile-menu-item--share">
// //             <button type="button">
// //               <svg
// //                 className="shareAndroid"
// //                 id="uuid-50515006-23d9-4e72-970b-d2a1dce94fb3"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 48 48"
// //               >
// //                 <path d="M35.79,32.27c-1.53,0-2.89,.6-3.94,1.55l-14.32-8.33c.1-.46,.18-.92,.18-1.41s-.08-.94-.18-1.41l14.16-8.25c1.08,1,2.51,1.63,4.1,1.63,3.33,0,6.02-2.69,6.02-6.02s-2.69-6.02-6.02-6.02-6.02,2.69-6.02,6.02c0,.48,.08,.94,.18,1.41l-14.16,8.25c-1.08-1-2.51-1.63-4.1-1.63-3.33,0-6.02,2.69-6.02,6.02s2.69,6.02,6.02,6.02c1.59,0,3.01-.62,4.1-1.63l14.3,8.35c-.1,.42-.16,.86-.16,1.31,0,3.23,2.63,5.86,5.86,5.86s5.86-2.63,5.86-5.86-2.63-5.86-5.86-5.86Zm0-24.26c1.1,0,2.01,.9,2.01,2.01s-.9,2.01-2.01,2.01-2.01-.9-2.01-2.01,.9-2.01,2.01-2.01-2.01Z"></path>
// //               </svg>
// //               Share
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //       <button className="sc--save-car-button" aria-label="Save this car">
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="22"
// //           height="22"
// //           viewBox="0 0 24 24"
// //           className="sc--save-car-button--heart"
// //           aria-hidden="true"
// //           focusable="false"
// //         >
// //           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
// //         </svg>
// //       </button>
// //       <div className="sc--tile-shell">
// //         <div className="sc--car-tile--images">
// //           <div
// //             className="sc--image-carousel"
// //             data-clickprops={`StockNumber: ${stockNumber}`}
// //           >
// //             <div className="sc--image-carousel--viewer">
// //               <button
// //                 type="button"
// //                 aria-label="left arrow button"
// //                 className="sc--image-carousel--nav sc--image-carousel--nav--left"
// //               >
// //                 <svg
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   aria-hidden="true"
// //                   focusable="false"
// //                 >
// //                   <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
// //                 </svg>
// //               </button>
// //               <button
// //                 type="button"
// //                 aria-label="right arrow button"
// //                 className="sc--image-carousel--nav sc--image-carousel--nav--right"
// //               >
// //                 <svg
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   aria-hidden="true"
// //                   focusable="false"
// //                 >
// //                   <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className="sc--carousel-item sc--hero-image">
// //               <a href={`/car/${id}`} rel="nofollow">
// //                 <img
// //                   loading="eager"
// //                   src={imageUrls[0]}
// //                   alt={`Black ${year} ${make} ${model} with stock number: ${stockNumber}`}
// //                   width="400"
// //                   height="300"
// //                 />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="sc--car-tile--content">
// //         <div>
// //           <button
// //             type="button"
// //             className="car-tile-action action-menu"
// //             aria-label="More Actions"
// //           >
// //             <svg
// //               width="24"
// //               height="24"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 clipRule="evenodd"
// //                 d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3Z"
// //                 fill="#2A343D"
// //               ></path>
// //             </svg>
// //           </button>
// //         </div>
// //         <div className="sc--make-model-container">
// //           <h3 className="sc--make-model-info make-model-info kmx-typography--body-2">
// //             {year} {make} {model}
// //           </h3>
// //         </div>
// //         <p className="sc--price">$ {price.toLocaleString()}</p>
// //         <div className="sc--mileage">
// //           <p>{mileage}</p>
// //         </div>
// //         <button
// //           type="button"
// //           className="sc--view-details"
// //           aria-label="View details"
// //         >
// //           View details
// //         </button>
// //       </div>
// //     </article>
// //   )
// // }

// // export default CarTile
// import React from "react"

// interface Car {
//   id: number
//   name: string
//   price: string
//   mileage: string
//   image: string
//   location: string
// }

// const cars: Car[] = [
//   {
//     id: 1,
//     name: "2014 Lexus IS 250",
//     price: "$19,998",
//     mileage: "116K mi",
//     image:
//       "https://img2.carmax.com/assets/25855258/hero.jpg?width=270&height=203", // Replace with actual image URLs
//     location: "Free Shipping from CarMax Independence, MO",
//   },
//   {
//     id: 2,
//     name: "2013 Ford Escape Titanium",
//     price: "$13,998",
//     mileage: "110K mi",
//     image:
//       "https://img2.carmax.com/assets/26627958/hero.jpg?width=270&height=203", // Replace with actual image URLs
//     location: "Available at your store CarMax Kansas City, MO",
//   },
//   {
//     id: 3,
//     name: "2014 Jeep Cherokee Trailhawk",
//     price: "$16,998",
//     mileage: "101K mi",
//     image:
//       "https://img2.carmax.com/assets/26441592/hero.jpg?width=270&height=203", // Replace with actual image URLs
//     location: "Available at your store CarMax Kansas City, MO",
//   },
// ]

// const CarTile: React.FC = () => {
//   return (
//     <div className="p-6 bg-gray-100 w-[75%] mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Shop cars near me</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {cars.map((car) => (
//           <div
//             key={car.id}
//             className="bg-white rounded-lg shadow-md  hover:shadow-lg transition"
//           >
//             <img
//               src={car.image}
//               alt={car.name}
//               className="w-full h-48 object-cover rounded-t-md"
//             />
//             <div className="mt-4 p-4">
//               <h3 className="text-lg font-semibold">{car.name}</h3>
//               <p className="text-gray-600 mt-1">{car.price}</p>
//               <p className="text-gray-600 mt-1">{car.mileage}</p>
//               <p className="text-sm text-gray-500 mt-2">{car.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CarTile
import React from "react"

interface Car {
  id: number
  name: string
  price: string
  mileage: string
  image: string
  location: string
}

const cars: Car[] = [
  {
    id: 1,
    name: "2014 Lexus IS 250",
    price: "$19,998",
    mileage: "116K mi",
    image:
      "https://img2.carmax.com/assets/25855258/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Free Shipping from CarMax Independence, MO",
  },
  {
    id: 2,
    name: "2013 Ford Escape Titanium",
    price: "$13,998",
    mileage: "110K mi",
    image:
      "https://img2.carmax.com/assets/26627958/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Available at your store CarMax Kansas City, MO",
  },
  {
    id: 3,
    name: "2014 Jeep Cherokee Trailhawk",
    price: "$16,998",
    mileage: "101K mi",
    image:
      "https://img2.carmax.com/assets/26441592/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Available at your store CarMax Kansas City, MO",
  },
  {
    id: 4,
    name: "2015 Smart Fortwo Pure",
    price: "$10,998",
    mileage: "39K mi",
    image:
      "https://img2.carmax.com/assets/26014248/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Free Shipping from CarMax Independence, MO",
  },
  {
    id: 5,
    name: "2022 Hyundai Santa Cruz SEL Premium",
    price: "$28,998",
    mileage: "28K mi",
    image:
      "https://img2.carmax.com/assets/26143613/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Available at your store CarMax Kansas City, MO",
  },
  {
    id: 6,
    name: "2013 Nissan Rogue S",
    price: "$12,998",
    mileage: "110K mi",
    image:
      "https://img2.carmax.com/assets/26441051/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Available at your store CarMax Kansas City, MO",
  },
  {
    id: 7,
    name: "2014 Chevrolet Malibu LT",
    price: "$13,599",
    mileage: "108K mi",
    image:
      "https://img2.carmax.com/assets/26627540/hero.jpg?width=270&height=203", // Replace with actual image URLs
    location: "Available at your store CarMax Kansas City, MO",
  },
]

const CarList: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100 content-container mx-auto">
      <h2 className="text-2xl font-bold font-serif mb-4 text-center">Some Affordable One's</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="min-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="mt-4  p-4">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-600 mt-1">{car.price}</p>
                <p className="text-gray-600 mt-1">{car.mileage}</p>
                <p className="text-sm text-gray-500 mt-2 truncateav">{car.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarList
