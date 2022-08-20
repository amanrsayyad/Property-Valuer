import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header/Header';
import Head from './component/Head/Head';
import Footer from './component/Footer/Footer';
import Map from './component/Map/Map';

function App() {
  return (
    <div className="App">
      <Router>
        <Head />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <Map />
      </Router>
    </div>
  );
}

export default App;
