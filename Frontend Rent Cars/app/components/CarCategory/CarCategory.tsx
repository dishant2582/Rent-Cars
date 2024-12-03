import React from "react"
import Categories from "./CarCategorySection"

const categoryData = [
  {
    title: "Luxury",
    url: "/luxury-car",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/luxury2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/luxury2.png?one=1",
    altText: "Luxury Cars",
    carCount: "690 Cars",
  },
  {
    title: "Sports",
    url: "/sports-cars",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/sports2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/sports2.png?one=1",
    altText: "Sports Cars",
    carCount: "280 Cars",
  },
  {
    title: "SUV",
    url: "/suv-car",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/suv2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/suv2.png?one=1",
    altText: "SUV Cars",
    carCount: "520 Cars",
  },
  {
    title: "Convertible",
    url: "/convertible-car",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/Convertible2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/convertible2.png?one=1",
    altText: "Convertible Cars",
    carCount: "150 Cars",
  },
  {
    title: "Economy",
    url: "/economy-cars",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/low-price2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/economy2.png?one=1",
    altText: "Economy Cars",
    carCount: "350 Cars",
  },
  {
    title: "Electric",
    url: "/electric-cars",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/electric2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/electric2.png?one=1",
    altText: "Electric Cars",
    carCount: "80 Cars",
  },
  {
    title: "Sports",
    url: "/sports-cars-in-supercar",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/sports2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/sports2.png?one=1",
    altText: "Sports Cars",
    carCount: "280 Cars",
  },
  {
    title: "SUV",
    url: "/suv-car-dubai",
    imgWebp:
      "https://www.oneclickdrive.com/application/views/images/suv2.webp?one=1",
    imgPng:
      "https://www.oneclickdrive.com/application/views/images/suv2.png?one=1",
    altText: "SUV Cars",
    carCount: "520 Cars",
  },
]

const CarCategory: React.FC = () => {
  return (
    <div className="my-16 content-container mx-auto">
      <h1 className="text-xl font-semibold mb-6">
      Popular Categories
      </h1>
      <Categories items={categoryData} />
    </div>
  )
}

export default CarCategory
