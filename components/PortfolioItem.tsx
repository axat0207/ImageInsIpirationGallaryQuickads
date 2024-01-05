import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

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
  const [isCopied, setIsCopied] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);

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
    top: '0',
    width: '100%',
    height: `${imageHeight}px`, // Set the height based on the image's height
    opacity: isHovered ? 1 : 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    transition: 'opacity 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  const handleImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    setImageHeight(target.height);
  };

  return (
    <div
      className="portfolio-item rounded-2xl"
      style={itemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="rounded-2xl"
        src={imageSrc}
        alt={filter}
        style={imageStyle}
        onLoad={handleImageLoaded} // Capture image's height on load
      />
      <div style={descriptionStyle}>
        {isHovered && (
          <>
            <div
              onClick={copyToClipboard}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '24px',
              }}
            >
              <FaRegCopy />
            </div>
            {isCopied && (
              <span
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50px',
                  right: '20px',
                }}
              >
                {' '}
                Copied to clipboard!
              </span>
            )}
          </>
        )}
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
