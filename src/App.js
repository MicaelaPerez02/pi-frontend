import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ProductDetails from './components/ProductInfo/ProductDetails';
import FilterCategory from './components/Filters/FilterCategory';
import FilterCities from './components/Filters/FilterCities';
import Reservation from './components/Cards/Reservation';
import ReservationSuccess from './components/Cards/ReservationSuccess';
import ProgressBar from "@badrap/bar-of-progress";
import './App.css';
import { UserContextProvider } from "../src/components/services/userContext";
import MyBookings from './components/User/MyBookings';
import ProductGenerator from './components/Admin/ProductGenerator';

function App() {
  const progress = new ProgressBar({
    size: 3,
    color: "var(--complementary)",
    className: "progressBar",
    delay: 100,
  });

  progress.start();

  setTimeout(() => {
    progress.finish();
  }, 500);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path='/myBookings/' element={< MyBookings />} />
          <Route path='/product/addProduct' element={< ProductGenerator />} />
          <Route path="/product/:productId" element={< ProductDetails />} />
          <Route path="/category/:categoryId" element={< FilterCategory />} />
          <Route path="/cities/:citiesId" element={< FilterCities />} />
          <Route path="/product/:productId/reservation" element={< Reservation />} />
          <Route path='/reservation/success' element={< ReservationSuccess />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;