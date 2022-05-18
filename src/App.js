import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Header />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;