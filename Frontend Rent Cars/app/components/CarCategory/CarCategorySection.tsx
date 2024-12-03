import React from "react"

type CategoryItem = {
  title: string
  url: string
  imgWebp: string
  imgPng: string
  altText: string
  carCount: string
}

type CategoriesProps = {
  items: CategoryItem[]
}

const Categories: React.FC<CategoriesProps> = ({ items }) => {
  return (
    <div className="carsec text-center">
      {/* Grid layout to control card placement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            className="item cat-item-mob border rounded-lg shadow-lg p-4 hover:shadow-xl"
            key={index}
          >
            <a href={item.url} className="hidtxt">
              <span className="carcatimg d-flex align-items-center">
                <picture>
                  <source srcSet={item.imgWebp} type="image/webp" />
                  <source srcSet={item.imgPng} type="image/png" />
                  <img
                    src={item.imgPng}
                    alt={item.altText}
                    fetchPriority="high"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
              </span>
              <div className="mt-4">
                <span className="brnd-title block text-lg font-semibold text-gray-800">
                  {item.title}
                </span>
                <span className="brnd-count text-gray-500 text-sm">
                  {item.carCount}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
