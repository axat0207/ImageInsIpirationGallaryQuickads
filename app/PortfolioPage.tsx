// PortfolioPage.tsx
"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import PortfolioItem from "../components/PortfolioItem";
import './gallaryGrid.css'
import {categories} from '../utils/checkboxData'
import {imageArray} from '@/utils/ImageGallaryData'
interface PortfolioItemProp {
  filter: string;
  imageSrc: string;
  Prompt: string;
}

const PortfolioPage: React.FC = () => {

   
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [items, setItems] = useState(imageArray)
  const handleFilter = (filter: string) => {
    if (filter === "all") {
      setActiveFilters([]); // Reset filters if 'all' is selected
    } else {
      setActiveFilters((prevFilters) => {
        if (prevFilters.includes(filter)) {
          return prevFilters.filter((f) => f !== filter); // Remove filter if already present
        } else {
          return [...prevFilters, filter]; // Add filter if not present
        }
      });
    }
  };

//   const categories = ["nature", "cars", "people"]; // Update to lowercase for consistency

const filteredItems =
  activeFilters.length === 0
    ? items
    : items.filter((item) => activeFilters.includes(item.Filter));

      return (
        <div className="flex flex-col h-screen">
          {/* Fixed Header */}
          <header className=" p-4 sticky top-0 z-10">Header Content</header>
    
          {/* Flex layout for Filter Buttons and Image Gallery */}
          <div className="flex flex-1 overflow-hidden">
            {/* Fixed Sidebar for Filter Buttons */}
            <div className="w-1/5  p-4 overflow-y-auto">
              <FilterButtons categories={categories} handleFilter={handleFilter} />
            </div>
    
            {/* Scrollable Image Gallery */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <PortfolioItem
                  key={item.index}
                  imageSrc={item.imageSrc}
                  filter={item.Filter}
                  prompt={item.Prompt}
                />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
};

export default PortfolioPage;
