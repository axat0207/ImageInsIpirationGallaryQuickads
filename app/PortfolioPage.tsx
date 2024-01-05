// PortfolioPage.tsx
'use client'
import { useState } from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import PortfolioItem from '../components/PortfolioItem';
interface PortfolioItemProp {
    category: string;
    imageSrc: string;
    title: string;
    description: string;
  }
  const items:PortfolioItemProp[] = [
    {
      category: 'nature',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWu-pAyUtiH98il85nVcOIFoBXevZ2xkgP0HFPDvvWg&s',
      title: 'Mountains',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'nature',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWu-pAyUtiH98il85nVcOIFoBXevZ2xkgP0HFPDvvWg&s',
      title: 'Lights',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'nature',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWu-pAyUtiH98il85nVcOIFoBXevZ2xkgP0HFPDvvWg&s',
      title: 'Forest',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSp2d_MImG-zQu2EGdXgxV6v0yPEjuNdT9ddGW18s5w&s',
      title: 'Retro',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSp2d_MImG-zQu2EGdXgxV6v0yPEjuNdT9ddGW18s5w&s',
      title: 'Fast',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSp2d_MImG-zQu2EGdXgxV6v0yPEjuNdT9ddGW18s5w&s',
      title: 'Classic',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: 'https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=',
      title: 'Girl',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIUK6W3TYWcd1r3HTH1LuNOkTZ8sjuzQPRCZ6OGmzqQ&s',
      title: 'Man',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIUK6W3TYWcd1r3HTH1LuNOkTZ8sjuzQPRCZ6OGmzqQ&s',
      title: 'Woman',
      description: 'Lorem ipsum dolor..',
    },
  ];
// Import statements...

const PortfolioPage: React.FC = () => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
    const handleFilter = (filter: string) => {
      if (filter === 'all') {
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
  
    const categories = ['nature', 'cars', 'people']; // Update to lowercase for consistency
  
    const filteredItems =
      activeFilters.length === 0
        ? items
        : items.filter((item) => activeFilters.includes(item.category));
  
    return (
      <div className="main">
        <Header />
        <FilterButtons categories={categories} handleFilter={handleFilter} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              category={item.category}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PortfolioPage;
  
  

