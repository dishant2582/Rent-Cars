import React from "react";

const articles = [
  {
    link: "/articles/2024-los-angeles-auto-show-everything-you-missed-492243/",
    image:
      "https://images.cars.com/cldstatic/wp-content/uploads/genesis-gv70-electrified-2026-06-exterior-rear-angle.jpg?w=800",
    alt: "genesis-gv70-electrified-2026-06-exterior-rear-angle",
    headline: "2024 Los Angeles Auto Show: Everything You Missed",
  },
  {
    link: "/articles/2024-los-angeles-auto-show-winners-and-losers-492245/",
    image:
      "https://images.cars.com/cldstatic/wp-content/uploads/2024-la-auto-show-vw-taos-winner.jpg?w=800",
    alt: "2024-la-auto-show-vw-taos-winner",
    headline: "2024 Los Angeles Auto Show: Winners and Losers",
  },
  {
    link: "/articles/2024-los-angeles-auto-show-best-in-show-492244/",
    image:
      "https://images.cars.com/cldstatic/wp-content/uploads/2024-la-auto-show-hyundai-ioniq-9-scaled.jpg?w=800",
    alt: "2024-la-auto-show-hyundai-ioniq-9",
    headline: "2024 Los Angeles Auto Show: Best in Show",
  },
  {
    link: "/articles/2024-porsche-718-boxster-gts-4-0-review-driving-distillate-493130/",
    image:
      "https://images.cars.com/cldstatic/wp-content/uploads/porsche-718-boxster-gts-2024-02-exterior-front-angle.jpg?w=800",
    alt: "porsche-718-boxster-gts-2024-02-exterior-front-angle",
    headline: "2024 Porsche 718 Boxster GTS 4.0 Review: Driving Distillate",
  },
];

const NewsReviews = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6 mt-12">News & Reviews</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <li key={index} className="rounded-lg shadow-lg overflow-hidden">
            <a
              href={article.link}
              className="block group hover:bg-gray-100 transition"
            >
              <img
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-600">
                  {article.headline}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <a
          href="/news/"
          className="text-blue-600 font-medium hover:underline"
        >
          See all news
        </a>
      </div>
    </section>
  );
};

export default NewsReviews;
