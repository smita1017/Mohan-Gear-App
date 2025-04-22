import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';

import Company from './Pages/Company';
import Navigation from './Pages/Navigation';
import Footer from './Pages/Footer';
import ContactUs from './Pages/ContactUs';
import Product_template from './Pages/product_template'; // ✅ Make sure this matches your file
import { productImages } from './Pages/Product_inner_data';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-template/:id" element={<Product_template />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
