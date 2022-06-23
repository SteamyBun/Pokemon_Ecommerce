import {
  FavoriteBorderRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const Circle = styled.div``;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div``;
const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon>
          <FavoriteBorderRounded />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
