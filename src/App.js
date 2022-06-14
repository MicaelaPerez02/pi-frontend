import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ProductDetails from './components/ProductInfo/ProductDetails';
import FilterCategory from './components/Cards/FilterCategory';
import FilterCities from './components/Navbar/FilterCities';
import Reservation from './components/Reservation/Reservation';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/product/:productId" element={< ProductDetails />} />
          <Route path="/category/:categoryId" element={< FilterCategory />} />
          <Route path="/cities/:citiesId" element={< FilterCities />} />
          <Route path="/product/:productId/reservation" element={< Reservation />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;