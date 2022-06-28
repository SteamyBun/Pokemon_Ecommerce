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
  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Pokemon</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Fire</Option>
            <Option>Water</Option>
            <Option>Grass</Option>
            <Option>Dragon</Option>
            <Option>Rock</Option>
            <Option>Psychic</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Gen
            </Option>
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
          <Select>
            <Option selected> Newest</Option>
            <Option>Price (Asc)</Option>
            <Option>Price (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
