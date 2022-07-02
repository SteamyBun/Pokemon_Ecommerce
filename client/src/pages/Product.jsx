import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
  height: 90vh;
  width: 100%;
  ${mobile({ height: '60vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '0px 10px' })}
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin: 40px 0px;
`;
const Price = styled.span`
  font-size: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 40px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 22px;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #d61c4e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  background-color: white;
  cursor: pointer;
  border: 3px solid #d61c4e;
  padding: 20px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImgContainer>
          <Image src='images/charizardreal.png' />
        </ImgContainer>
        <InfoContainer>
          <Title>Charizard</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            fuga corporis. Repudiandae deserunt praesentium quod. Praesentium
            eos molestiae deleniti eveniet omnis laboriosam totam sed eaque,
            delectus provident hic. Consequuntur, culpa.
          </Desc>
          <Price>$5000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black'></FilterColor>
              <FilterColor color='orange'></FilterColor>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
