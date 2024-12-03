import React from "react";

const comparisons = [
  {
    link: "/research/compare/?vehicles[]=ford-mustang_mach_e-2024&vehicles[]=tesla-model_y-2024",
    images: [
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/f0fa92d0-5b3c-47a9-aeff-f2acb46dbd26/56fc0b74-a7ee-4c09-bd4e-94c94b327b16.png",
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/288e9cea-e7ba-454c-9acd-024f42002a23/e38b57d5-cc98-4dc0-9635-3aa684599d27.png",
    ],
    matchup: "2024 Tesla Model Y vs. 2024 Ford Mustang Mach-E",
  },
  {
    link: "/research/compare/?vehicles[]=honda-accord-2024&vehicles[]=toyota-camry-2024",
    images: [
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/3ca47144-742d-43b5-8879-1c08875c0967/b3fd53c7-9bd2-460a-b97c-8c3e4f76399d.png",
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/2e42f163-0bf3-4436-b270-765e87d63ee7/c8f2f314-a71f-42a8-9973-9a9fd4b9afb4.png",
    ],
    matchup: "2024 Honda Accord vs. 2024 Toyota Camry",
  },
  {
    link: "/research/compare/?vehicles[]=honda-cr_v-2024&vehicles[]=toyota-rav4-2024",
    images: [
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/6385f241-b6dc-4289-a89d-e696bf1e3575/8b8c957f-1e23-4761-975e-5ea3672e71f7.png",
      "https://platform.cstatic-images.com/medium/in/v2/stock_photos/c562f90c-f372-48a8-b765-8b19d74a48b2/1ece5ca3-8def-4bed-8a8c-c425ceaf0626.png",
    ],
    matchup: "2024 Honda CR-V vs. 2024 Toyota RAV4",
  },
];

const Comparison = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6 font-serif">
        Compare TOP rated vehicles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {comparisons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-4 hover:bg-gray-200"
          >
            <div className="flex gap-4 mb-4">
              {item.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  className="w-24 h-24 object-contain"
                />
              ))}
            </div>
            <p className="text-center font-medium">{item.matchup}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Comparison;
