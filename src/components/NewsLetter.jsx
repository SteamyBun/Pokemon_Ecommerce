import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 50px;
`;
const Description = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Sign up for our newletter to get the latest updates on new pokemon
      </Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
