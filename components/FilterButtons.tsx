interface FilterButtonsProps {
  categories: string[];
  handleFilter: (filter: string) => void;
}
const FilterButtons: React.FC<FilterButtonsProps> = ({ categories, handleFilter }) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
  
      if (checked) {
        handleFilter(value); // Add category to filters
      } else {
        handleFilter('all'); // Remove category from filters
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
  