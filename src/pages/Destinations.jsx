import React from 'react'
import DestinationCard from '../Components/DestinationCard';
import Testimonials from '../Components/Testimonials';
import first from '../assets/images/first.png'
import sec from '../assets/images/second.png'
import third from '../assets/images/three.png'
export default function Destinations() {
  return (
    <div className="container mt-5">
      <h2 className="my-5">Featured Destinations</h2>
      <div className="row">
        <DestinationCard title="Paris" description="The city of light." image={first} />
        <DestinationCard title="New York" description="The city that never sleeps." image={sec} />
        <DestinationCard title="Tokyo" description="A city of contrasts." image={third} />
        <DestinationCard title="Paris" description="The city of light." image={first} />
        <DestinationCard title="New York" description="The city that never sleeps." image={sec} />
        <DestinationCard title="Tokyo" description="A city of contrasts." image={third} />
      </div>
      <Testimonials />
    </div>
  )
}
