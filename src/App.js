// src/App.js
import React from 'react';
import Header from './components/Header';
import MySection from './components/Mysection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <MySection />
      <Footer />
    </div>
  );
};

export default App;