import React, { useState } from 'react';
import CvForm from './components/CvForm';
import CvDisplay from './components/CvDisplay';
import './styles.css';

function App() {
  const [cvData, setCvData] = useState(null);

  const handleFormSubmit = (data) => {
    setCvData(data);
  };

  return (
    <div>
      <h1>Générateur de CV</h1>
      {!cvData ? (
        <CvForm onSubmit={handleFormSubmit} />
      ) : (
        <CvDisplay data={cvData} />
      )}
    </div>
  );
}

export default App;
