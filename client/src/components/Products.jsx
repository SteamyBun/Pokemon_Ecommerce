import { useEffect } from 'react';
import styled from 'styled-components';
import { popularProduct } from '../data';
import Product from './Product';
import axios from 'axios';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products');
      console.log(res);
      try {
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  return (
    <Container>
      {popularProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
