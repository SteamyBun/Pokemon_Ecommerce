import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Charizard</Title>
          <Price>$5000</Price>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            fuga corporis. Repudiandae deserunt praesentium quod. Praesentium
            eos molestiae deleniti eveniet omnis laboriosam totam sed eaque,
            delectus provident hic. Consequuntur, culpa.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
