import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Slide from '../components/Slide';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slide />
      <Categories />
    </div>
  );
};

export default Home;
