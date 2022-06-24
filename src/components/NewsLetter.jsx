import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #adcf9f;
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
const InputContainer = styled.div`
  height: 40px;
  width: 40%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
const Input = styled.input`
  border: none;
  flex: 7;
`;
const Button = styled.button`
  flex: 1;
  background-color: #ffdcae;
  color: #adcf9f;
`;

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
