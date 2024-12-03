import Features from "../components/Features";
import NewsReviews from "../components/NewsReviews";
import Reviews from "../components/Reviews";
import TestimonialsCarousel from "../components/TestimonalsCarousel";
import Why from "../components/Why";

const page = () => {
  return (
    <div className="bg-zinc-50 overflow-hidden">
    <TestimonialsCarousel/>
    <NewsReviews/>
    <Reviews/>
    <Why/>
    <Features/>
  </div>
  
  );
};

export default page;



