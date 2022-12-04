import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterLayout from './common/RouterLayout';
import { LaptopPage, TelevisorPage, VideoGamePage } from './pages/Category';
import CheckoutPage from './pages/Checkout';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import ProductPage from './pages/Product';
import SearchProductPage from './pages/SearchProduct';
import { Search } from './type';

const AppRouter: React.FC = () => {
  const [searchProduct, setSearchProduct] = useState<Search>({
    product: '',
  });

  const changeSearchProduct = (value: string) => {
    setSearchProduct({
      product: value,
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<RouterLayout changeSearchProduct={changeSearchProduct} />}
      >
        <Route index element={<HomePage />} />
        <Route path="Product/:id" element={<ProductPage />} />
        <Route
          path="SearchProduct"
          element={<SearchProductPage searchProduct={searchProduct} />}
        />
        <Route path="Laptop" element={<LaptopPage />} />
        <Route path="Televisor" element={<TelevisorPage />} />
        <Route path="VideoGame" element={<VideoGamePage />} />
        <Route path="Contacto" element={<ContactPage />} />
      </Route>

      <Route path="/Checkout/:id" element={<CheckoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
