// LocationInfo.js
import React from 'react';

const LocationInfo = ({ data }) => {
  const { country, state, placeName } = data;

  return (
    <div>
      <h2>Location Information</h2>
      <p>Country: {country}</p>
      <p>State: {state}</p>
      <p>Place Name: {placeName}</p>
    </div>
  );
};

export default LocationInfo;
