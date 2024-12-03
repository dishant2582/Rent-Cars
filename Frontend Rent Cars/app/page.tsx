'use client';
import Modal from "./components/Modal";
import CarCategory from "./components/CarCategory/CarCategory";
import CarList from "./components/CarList";
import Comparison from "./components/Comparison";
import NewsReviews from "./components/NewsReviews";
import Question from "./components/Question";
import ShopByBrand from "./components/ShopByBrand";
import Why from "./components/Why";
import YourGarage from "./components/YourGarage";
import Banner from "./components/Banner";
import FAQSection from "./components/FAQSection";
import Carousel from "./components/Carousel";
import RentalServiceSection from "./components/RentalServiceSection";
import TopCars from "./components/TopCars";
import TopCities from "./components/TopCities";
import Features from "./components/Features";

const mySliderData = [
  {
    image: "https://wallup.net/wp-content/uploads/2016/01/77185-car-sunset-Corvette.jpg",
    title: "Explore the World",
    description: "Discover the most beautiful destinations worldwide.",
  },
  {
    image: "https://www.pixel-creation.com/wp-content/uploads/2016-mustang-wallpapers-wallpaper-cave.jpg",
    title: "Adventure Awaits",
    description: "Get ready for an exciting journey through nature.",
  },
  {
    image: "https://wallpaperaccess.com/full/2220584.jpg",
    title: "Special Offers",
    description: "Check out the latest deals on travel packages.",
  },
];

// image: "https://cdn.wallpapersafari.com/21/81/n1I4oD.jpg",

const Home= () => {
  return (
    <div>
      <Modal data={mySliderData} />
      <RentalServiceSection/>
     
      <TopCars/>
      <Comparison/>
      <Banner/>
      <CarList/>
      <TopCities/>
      <ShopByBrand/>
      <Question/>
      <Why/>
      <Features/>
    </div>
  );
};

export default Home;

