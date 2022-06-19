import { Badge, Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchInput />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Title>Poke-Mart.</Title>
        </Center>
        <Right>
          <NavItems>Register</NavItems>
          <NavItems>Sign In</NavItems>
          <NavItems>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
