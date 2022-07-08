import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/products/:id' element={<ProductList />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  );
};

export default App;
