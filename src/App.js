import React from 'react';
import './App.css'; // Assuming you have a corresponding CSS file
import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/Main';
import CTA from './components/CTA';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <CTA />
    </div>
  );
}

export default App;
