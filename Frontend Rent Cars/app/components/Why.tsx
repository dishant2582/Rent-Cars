import React from "react";

const Why = () => {
  const cards = [
    {
      imgSrc:
        "https://www.truecar.com/assets/_next/static/images/transparent-pricing-4d7899553551b3a2db95d346ac20062f.svg",
      title: "Transparent pricing",
      description: "No surprises here. See how much you'll pay on cars you like.",
    },
    {
      imgSrc:
        "https://www.truecar.com/assets/_next/static/images/minutes-not-hours-48afd64860a3e72b36d5986738c77eb4.svg",
      title: "Minutes, not hours",
      description: "Time-saving tools to help you find the right car in a snap.",
    },
    {
      imgSrc:
        "https://www.truecar.com/assets/_next/static/images/shop-your-way-f575579b12ccf6daf39539dab242c0e2.svg",
      title: "Shop your way",
      description:
        "Your own pace, your own space. Shop online where and when it's convenient for you.",
    },
  ];

  return (
    <div className="py-5 text-center bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold pt-3 pb-5 font-serif">Why Rent IT Cars?</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center h-64"
            >
              <img src={card.imgSrc} alt="" className="w-28 h-28 mb-4" />
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm mt-2 text-center">{card.description}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 mb-9 bg-slate-50 text-black font-medium py-2 px-4 rounded hover:bg-blue-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Why;
