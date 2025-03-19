import React from 'react';
import Navbar from './components/Navbar';
import Community from './components/Community';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.css';
import InstagramFeed from './components/InstagramFeed';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Community />
      <Info />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
