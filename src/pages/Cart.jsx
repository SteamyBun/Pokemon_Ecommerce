import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 25px;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductID = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: '20px 0px' })}
`;

const Hr = styled.hr`
  background-color: #eeee;
  height: 1px;
`;

const Amount = styled.div`
  font-size: 15px;
  ${mobile({ fontSize: '20px' })}
`;
const ProductPrice = styled.div`
  font-size: 18px;
  margin: 20px;
  ${mobile({ fontSize: '20px' })}
`;

const Summary = styled.div`
  height: 50%;
  border: 1px solid lightgrey;
  padding: 30px;
  flex: 1;
`;

const SummaryTitle = styled.div`
  font-size: 25px;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='images/charizardreal.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> Charizard
                  </ProductName>
                  <ProductID>
                    <b>Product ID:</b> 1234567890
                  </ProductID>
                  <ProductColor color='orange' />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 5000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='images/rayquazaoriginal.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> Rayquaza
                  </ProductName>
                  <ProductID>
                    <b>Product ID:</b> 0987654321
                  </ProductID>
                  <ProductColor color='green' />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 10000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> $15000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> $5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Promo Code</SummaryItemText>
              <SummaryItemPrice> $-5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> $15000</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
