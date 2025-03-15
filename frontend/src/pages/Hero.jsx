import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const itemsData = [
  { id: 1, imageUrl: '/hero01.jpg', name: 'Luxury Home 1', description: 'Stunning modern architecture.' },
  { id: 2, imageUrl: '/hero02.jpg', name: 'Elegant Villa', description: 'Experience refined living.' },
  { id: 3, imageUrl: '/hero03.jpg', name: 'Contemporary Residence', description: 'Stylish and spacious design.' },
  { id: 4, imageUrl: '/hero04.jpg', name: 'Modern Estate', description: 'Exceptional design and comfort.' },
  { id: 5, imageUrl: '/hero05.jpg', name: 'Dream Home', description: 'Your perfect sanctuary awaits.' },
  // Add more image data here
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerBackground, setContainerBackground] = useState(`url('${itemsData[0].imageUrl}')`);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsData.length) % itemsData.length);
    setContainerBackground(`url('${itemsData[(currentIndex - 1 + itemsData.length) % itemsData.length].imageUrl}')`);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % itemsData.length;
    setCurrentIndex(nextIndex);
    setContainerBackground(`url('${itemsData[nextIndex].imageUrl}')`);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full h-[90vh] bg-gray-100 overflow-hidden bg-cover bg-center bg-no-repeat transition-background duration-500"
      style={{ backgroundImage: containerBackground }}
    >
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] text-left text-white p-8 bg-black bg-opacity-50 rounded-md">
        <Typography variant="h4" className="text-4xl font-bold uppercase mb-2">
          {itemsData[currentIndex].name}
        </Typography>
        <Typography variant="body1" className="mb-4">
          {itemsData[currentIndex].description}
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 flex items-center"> {/* Removed justify-end */}
        <div className="relative w-[500px] h-[300px]">
          {itemsData.map((item, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            let translateX = 0;
            let scale = 0.8;
            let zIndex = 1;
            let opacity = 0.7;
            const perspective = 500;
            let rotateY = '0deg';

            if (offset === 0) {
              scale = 1;
              zIndex = 3;
              opacity = 1;
              translateX = 0; // Center
            } else if (offset === 1) {
              translateX = 180; // Move next to the right
              scale = 0.9;
              zIndex = 2;
              opacity = 0.8;
              rotateY = '20deg';
            } else if (offset === -1) {
              translateX = -180; // Move previous to the left
              scale = 0.9;
              zIndex = 2;
              opacity = 0.8;
              rotateY = '-20deg';
            } else if (offset === 2) {
              translateX = 360; // Move further right
              scale = 0.7;
              opacity = 0.6;
              rotateY = '30deg';
            } else if (offset === -2) {
              translateX = -360; // Move further left
              scale = 0.7;
              opacity = 0.6;
              rotateY = '-30deg';
            } else if (offset < -2) {
              translateX = `calc(-180px - ${absOffset - 1} * 100px)`; // Move further left off-screen
              opacity = 0;
            } else if (offset > 2) {
              translateX = `calc(180px + ${absOffset - 1} * 100px)`; // Move further right off-screen
              opacity = 0;
            }

            return (
              <div
                key={item.id}
                className={`absolute top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-md shadow-lg bg-cover bg-center transition-transform duration-500`}
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  perspective: `${perspective}px`,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-black bg-opacity-50 rounded-full p-2">
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
          onClick={goToPrevious}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
          onClick={goToNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <style jsx>{`
        .transition-background {
          transition-property: background-image;
        }
        .transition-transform {
          transition-property: transform, opacity;
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <ImageSlider />
    </div>
  );
}

export default Hero;