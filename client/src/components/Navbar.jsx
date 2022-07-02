import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 80px;
  background-color: white;
  ${mobile({ height: '80px' })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Title = styled.h1`
  text-align: center;
  ${mobile({ fontSize: '20px' })}
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
  ${mobile({ width: '50px' })}
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
  ${mobile({ flex: '2', justifyContent: 'center' })}
`;

const NavItems = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
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
