import React from 'react';

interface FilterSidebarProps {
  filters: {
    fuel: string;
    transmission: string;
    rating: string;
  };
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onApplyFilters: () => void;
  resetFilters: () => void; // Add resetFilters as a prop
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, onApplyFilters, resetFilters }) => {
  return (
    <div className="shadow-lg border border-gray-800 pt-10 pb-20 p-5 rounded-lg bg-white mt-12">
      {/* Search Input Section */}
      <div className="relative">
        <div className="absolute flex items-center ml-2 h-full">
          <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by name..."
          className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        />
      </div>

      {/* Filters Section */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>
        <button
          onClick={resetFilters} // Trigger the resetFilters function
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
        >
          Reset Filter
        </button>
      </div>

      {/* Filter Options */}
      <div className="mt-4 space-y-4">
        {/* Fuel Type */}
        <select
          name="fuel"
          value={filters.fuel}
          onChange={onFilterChange}
          className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm pr-5"
        >
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>

        {/* Transmission */}
        <select
          name="transmission"
          value={filters.transmission}
          onChange={onFilterChange}
          className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        >
          <option value="">Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        {/* Rating */}
        <select
          name="rating"
          value={filters.rating}
          onChange={onFilterChange}
          className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        >
          <option value="">Minimum Rating</option>
          <option value="3.0">3.0+</option>
          <option value="3.5">3.5+</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <div className="mt-4">
        <button
          onClick={onApplyFilters}
          className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-600"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
