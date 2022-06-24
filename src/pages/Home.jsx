import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Slide from '../components/Slide';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slide />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
