import React from 'react';
import Navbar from './components/Navbar';
import Community from './components/Community';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Community />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
