// PortfolioItem.tsx
interface PortfolioItemProps {
    category: string;
    imageSrc: string;
    title: string;
    description: string;
  }
  
  const PortfolioItem: React.FC<PortfolioItemProps> = ({
    category,
    imageSrc,
    title,
    description,
  }) => {
    return (
      <div className={`column ${category} px-4 py-2`}>
        <div className="content bg-white p-4">
          <img src={imageSrc} alt={title} className="w-full" />
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default PortfolioItem;
  