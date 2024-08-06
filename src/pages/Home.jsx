import React from 'react';
import Carousel from '../Components/CustomCarousel';
import DestinationCard from '../Components/DestinationCard';
import Events from '../Components/Events';
import Testimonials from '../Components/Testimonials';
import first from '../assets/images/first.png'
import sec from '../assets/images/second.png'
import third from '../assets/images/three.png'
import LongTrips from '../Components/LongTrips';

function Home() {
  return (
    <>
    <div className="container mt-5">
      <Carousel />
      <h2 className="my-5">Featured Destinations</h2>
      <div className="row">
        <DestinationCard title="Paris" description="The city of light." image={first} />
        <DestinationCard title="New York" description="The city that never sleeps." image={sec} />
        <DestinationCard title="Tokyo" description="A city of contrasts." image={third} />
      </div>
      <Events/>
      <LongTrips title="Long Backpacking Trips"/>
      <Testimonials />
    </div>
    </>
  );
}

export default Home;

