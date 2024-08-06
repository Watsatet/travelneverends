import React from 'react';
import '../styles/trips.css';

const LongTrips = ({ title }) => {
  const trips = [
    {
      imgSrc: "https://media.istockphoto.com/id/910430170/photo/tawang-arunachal-pradesh.jpg?s=1024x1024&w=is&k=20&c=xPmnZZHEsmYH9R_s7QUCIyMPypJEPtHVGnpx7moUizU=",
      title: "Tawang Backpacking Trip (7D/6N)",
      price: "From ₹26,450",
      details: ["7 Days 6 Night", "✓ Guwahati"]
    },
    {
      imgSrc: "https://images.pexels.com/photos/19469039/pexels-photo-19469039/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Meghalaya Monsoon Special Trip (5D/4N)",
      price: "From ₹15,450",
      details: ["5 Days 4 Nights", "✓ Guwahati"]
    },
    {
      imgSrc: "https://as2.ftcdn.net/v2/jpg/02/43/25/89/1000_F_243258954_jIS0UfqmcYKVQ885aPXSDFAtno1hPGyz.jpg",
      title: "The Spiti Valley Winter Special Trip (9D/8N)",
      price: "From ₹22,450",
      details: ["9 Days, 8 Nights", "✓ Delhi"]
    },
    // Add more trip objects as needed
  ];

  return (
    <div className="contain">
      <h1 className="title">{title}</h1>
      <div className="trip-cards">
        {trips.map((trip, index) => (
          <div className="trip-card" key={index}>
            <img src={trip.imgSrc} alt={trip.title} className="trip-image" />
            <div className="trip-info">
              <h3>{trip.title}</h3>
              <p className="price">{trip.price}</p>
              <ul className="trip-details">
                {trip.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongTrips;
