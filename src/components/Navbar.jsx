import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Left
          <Search />
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
