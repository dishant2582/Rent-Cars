import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel mt-[-56px] py-5 lg:px-3">
      <div className="relative flex w-full items-center">
        <button
          className="carousel-arrow carousel-arrow-outside carousel-arrow-light carousel-arrow-small carousel-arrow-slide-spacing-1 carousel-arrow-prev carousel-arrow-prev"
          data-test="carouselArrowPrev"
          aria-label="Previous"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            className="carousel-arrow-icon"
            aria-hidden="true"
          >
            <g strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <polyline strokeWidth="1.5" fillRule="nonzero" points="5 2 12 8.36363636 5 14.7272727"></polyline>
            </g>
          </svg>
        </button>
        <div className="relative overflow-hidden grow">
          <ul className="flex flex-nowrap relative">
          {[
              { label: 'Sedans', imgSrc: 'https://www.truecar.com/assets/_next/static/images/sedan-dff0d70ce3dfc53c7d48d91e79a26652.jpg' },
              { label: 'SUVs', imgSrc: 'https://www.truecar.com/assets/_next/static/images/suv-275ed70df463ea1cae0748f15eced3ae.jpg' },
              { label: 'Trucks', imgSrc: 'https://www.truecar.com/assets/_next/static/images/truck-ad515512810927b6687812b8b9cb64ae.jpg' },
              { label: 'Vans', imgSrc: 'https://www.truecar.com/assets/_next/static/images/van-f52db2b870549226c6612da6419c1896.jpg' },
              { label: 'Electric Vehicles (EV)', imgSrc: 'https://www.truecar.com/assets/_next/static/images/ev-a95ca4103bd2356b4c93ca70ec6595e4.jpg' },
              { label: 'Hybrids', imgSrc: 'https://www.truecar.com/assets/_next/static/images/hybrid-8674ca92667ba94371e57e7a91f07823.jpg' },
              { label: 'Plug-In Hybrids (PHEV)', imgSrc: 'https://www.truecar.com/assets/_next/static/images/phev-b1b4bb23d87b76a3944a7fe7b7ef7e1d.jpg' },
              { label: 'Hatchbacks', imgSrc: 'https://www.truecar.com/assets/_next/static/images/hatchback-f9501b6dc68dd0e20361b353c5f14251.jpg' },
              { label: 'Coupes', imgSrc: 'https://www.truecar.com/assets/_next/static/images/coupe-3850b84948d5d05f6ecaeee9affe4e7c.jpg' },
              { label: 'Convertibles', imgSrc: 'https://www.truecar.com/assets/_next/static/images/convertible-42255d0eb6db160b820f8718f9e830b4.jpg' }
            ].map((item, index) => (
              <li
                key={index}
                className="px-1"
                style={{
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                  width: '12.5%',
                }}
                aria-hidden="true"
              >
                <a
                  className="linkable card transition-shadow duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] mt-[56px] h-full rounded-t shadow-none"
                >
                  <div className="relative pb-[236.4485981308411%]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded"
                      src={item.imgSrc}
                      srcSet={`${item.imgSrc}?auto=format&fit=max&h=212.803738317757&w=90 90w, ${item.imgSrc}?auto=format&fit=max&h=425.607476635514&w=180 180w`}
                      alt=""
                      role="presentation"
                    />
                  </div>
                  <span className="mt-3 w-full text-center text-xs font-bold uppercase">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
