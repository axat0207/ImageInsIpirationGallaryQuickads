import { useState } from "react";

interface FilterButtonsProps {
  categories: string[];
  handleFilter: (filter: string) => void;
  setActiveFilters: (filters: string[]) => void; // Add this line
}
const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  handleFilter,
  setActiveFilters,
}) => {
  const [prevFilters, setPrevFilters] = useState<string[]>([]); // Add this line

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      const newFilters = prevFilters.includes(value) ? prevFilters : [...prevFilters, value];
      setActiveFilters(newFilters);
      setPrevFilters(newFilters); // Update prevFilters state
    } else {
      const newFilters = prevFilters.filter((filter: string) => filter !== value);
      setActiveFilters(newFilters);
      setPrevFilters(newFilters); // Update prevFilters state
    }
  };

  return (
    <div className="flex flex-col space-y-2 py-4">
      <label className="block font-bold">Filter by Category:</label>
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`category-${index}`}
            value={category}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`category-${index}`}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterButtons;
