import React from 'react';
import './App.css';
import Home from "./Home";
import Header from './Header'
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
