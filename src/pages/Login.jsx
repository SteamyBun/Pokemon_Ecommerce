import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('images/pokemoncenter.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 20%;
  background-color: white;
  padding: 40px;
  ${mobile({ width: '80%' })}
`;

const Title = styled.div`
  font-size: 25px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 20px;
  cursor: pointer;
  background-color: #d61c4e;
  border: 1px solid black;
  color: white;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
        </Form>
        <Button>Login</Button>
        <Link>Forgot Password?</Link>
        <Link>Create New Account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
