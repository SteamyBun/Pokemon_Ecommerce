import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 30px;
  ${mobile({ margin: '20px 10px' })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 30px;
  ${mobile({
    width: '0px 30px',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
  })}
`;

const FilterText = styled.span`
  font-size: 15px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 5px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Pokemon</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='type' onChange={handleFilters}>
            <Option disabled>Type</Option>
            <Option>Fire</Option>
            <Option>Water</Option>
            <Option>Grass</Option>
            <Option>Dragon</Option>
            <Option>Rock</Option>
            <Option>Psychic</Option>
          </Select>
          <Select name='gen' onChange={handleFilters}>
            <Option disabled>Gen</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest' selected>
              {' '}
              Newest
            </Option>
            <Option value='asc'>Price (Asc)</Option>
            <Option value='desc'>Price (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
