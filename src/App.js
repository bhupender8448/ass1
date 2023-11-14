// App.js
import React, { useState } from 'react';
import ZipCodeForm from './ZipCodeForm';
import LocationInfo from './LocationInfo';
import './App.css'; // Add your CSS file or use inline styles

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleZipCodeSubmit = async (zipCode) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      const data = await response.json();

      // Assuming you want the state and place name of the first place
      const state = data.places[0]['state'];
      const placeName = data.places[0]['place name'];

      setLocationData({ country: data.country, state, placeName });
    } catch (error) {
      setError('Error fetching location information');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocationData(null);
    setError(null);
  };

  return (
    <div className="main">
    <div className="app">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onSubmit={handleZipCodeSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {locationData && <LocationInfo data={locationData} />}
      <button onClick={handleClear}>Clear</button>
    </div>
    </div>
  );
};

export default App;
