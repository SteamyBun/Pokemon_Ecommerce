import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
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
  padding: 3px;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchInput placeholder='Search Poke-Mart' />
            <Search style={{ fontSize: 15 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Title>Poké-Mart.</Title>
        </Center>
        <Right>
          <NavItems></NavItems>
          <NavItems>Register</NavItems>
          <NavItems>Sign In</NavItems>
          <NavItems>
            <Badge badgeContent={0} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
