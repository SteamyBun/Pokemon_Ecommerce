import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('images/palletetown.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 40px;
  ${mobile({ width: '80%' })}
`;

const Title = styled.div`
  font-size: 25px;
`;

const Agreement = styled.div`
  margin: 20px 0px;
  font-size: 12px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 20px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 20px;
  cursor: pointer;
  background-color: #d61c4e;
  border: 1px solid black;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <Button>Create Account</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
