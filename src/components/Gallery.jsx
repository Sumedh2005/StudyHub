import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <div className="gallery-container mt-32 flex justify-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="h-[60vh] w-[700px]"
          
            src="https://i.pinimg.com/564x/23/0b/c5/230bc5744a4de920eb00c47bbdbced7c.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-[60vh] w-[700px]"
          
            src="https://i.pinimg.com/564x/c7/4b/0b/c74b0ba0f6e79bbe40bfa63bf8ce0cf4.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-[60vh] w-[700px]"
             
            src="https://i.pinimg.com/564x/aa/fa/2a/aafa2aa12826cee341719bad4b2974be.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
