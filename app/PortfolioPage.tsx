// PortfolioPage.tsx
"use client";
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import PortfolioItem from "../components/PortfolioItem";
import "./gallaryGrid.css";
import { categories } from "../utils/checkboxData";
import { imageArray } from "@/utils/ImageGallaryData";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PortfolioPage: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [items, setItems] = useState(imageArray);

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

  const filteredItems =
    activeFilters.length === 0
      ? items
      : items.filter((item) => item.Filter && activeFilters.includes(item.Filter));

  return (
    <div className="">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 hidden lg:block p-4 overflow-y-auto max-h-screen">
          <FilterButtons
            setActiveFilters={setActiveFilters}
            categories={categories}
            handleFilter={handleFilter}
          />
        </div>

        {/* Scrollable Image Gallery */}
        <div className="flex-1 overflow-y-auto px-4 mt-36 md:mt-24  ">
          <div className="text-center text-4xl md:text-6xl mt-6 mb-4 font-bold">
            Find your next winning shot
          </div>
          <div className="text-center hidden md:block mt-5 mb-10 mx-4 lg:mx-20">
            Generating product images using AI can be tricky. But it becomes a
            lot simpler using proven descriptions and reference images tested by
            businesses around the world. Click on your favorite image below, and
            use the template for your product in Quickads.
          </div>
          <div className="text-center md:hidden mt-5 mb-10 mx-4 lg:mx-20">
            Click on your favorite image below, and use the template for your
            product in Quickads.
          </div>
          <div className="flex lg:hidden justify-between items-center px-5 mx-4 py-1 my-4 text-slate-700  border border-gray-400  rounded-md">
            {/* side bar for small screen  */}
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>Filters By Product Categories</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-2 py-4">
                      {/* <label className="block font-bold">Filter by Category:</label> */}
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={`category-${index}`}
                            value={category}
                            // onChange={handleCheckboxChange}
                          />
                          <label htmlFor={`category-${index}`}>
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <div>Filter by Product, theme etc.</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <PortfolioItem
                key={item.index}
                imageSrc={item.imageSrc}
                filter={item.Filter}
                prompt={item.Prompt}
                 loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
