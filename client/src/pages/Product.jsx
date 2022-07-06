import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

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
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
        console.log(res);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color }));
  };

  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
