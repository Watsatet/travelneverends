import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../assets/images/first.png'
import sec from '../assets/images/second.png'
import third from '../assets/images/three.png'
import styled from 'styled-components';

const StyledCarouselImage = styled.img`
  width: 100%;
  height: 500px; /* Set your desired height */
  object-fit: contain; /* Cover the container while maintaining aspect ratio */
`;
function CustomCarousel() {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <StyledCarouselImage className="d-block" src={first} alt="First slide" />\
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <StyledCarouselImage className="d-block" src={sec} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <StyledCarouselImage className="d-block" src={third} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
