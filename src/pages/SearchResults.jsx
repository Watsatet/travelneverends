import React from 'react';
import { useLocation } from 'react-router-dom';
import DestinationCard from '../Components/DestinationCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query');

  // Mock search results
  const searchResults = [
    { title: 'Paris', description: 'The city of light.', image: 'paris.jpg' },
    { title: 'New York', description: 'The city that never sleeps.', image: 'newyork.jpg' },
    { title: 'Tokyo', description: 'A city of contrasts.', image: 'tokyo.jpg' },
  ].filter(destination => destination.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mt-5">
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <DestinationCard key={index} {...result} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
