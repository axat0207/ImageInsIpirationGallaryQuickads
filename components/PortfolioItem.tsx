import React, { useState } from 'react';

interface PortfolioItemProps {
  imageSrc: string;
  filter: string;
  prompt: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageSrc,
  filter,
  prompt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const descriptionStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: isHovered ? 1 : 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    transition: 'opacity 0.3s ease-in-out',
    width: '80%',
  };

  return (
    <div
      className="portfolio-item rounded-2xl"
      style={itemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className='rounded-2xl' src={imageSrc} alt={filter} style={imageStyle} />
      <div style={descriptionStyle}>
        <h3>{filter}</h3>
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
