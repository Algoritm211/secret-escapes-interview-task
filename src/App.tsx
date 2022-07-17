import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { SalesList } from './pages/SalesList/SalesList';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SalesList />} />
      <Route path="/sale/:id" element={<SalesList />} />
    </Routes>
  </div>
);

export default App;
