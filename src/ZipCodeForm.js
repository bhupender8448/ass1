// ZipCodeForm.js
import React, { useState } from 'react';
import './App.css';

const ZipCodeForm = ({ onSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Zip Code: 
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ZipCodeForm;
