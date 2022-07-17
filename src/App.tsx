import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Sale } from './pages/Sale';
import { SalesList } from './pages/SalesList';
import { Layout } from './components/UI/Layout';

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SalesList />} />
      <Route path="/sale/:id" element={<Sale />} />
    </Routes>
  </Layout>
);

export default App;
