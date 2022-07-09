import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../redux/apiCalls';

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
  width: 30%;
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
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;

const Error = styled.span`
  margin: 30px;
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={handleClick} disabled={isFetching}>
          Login
        </Button>
        <Button>LogOut</Button>
        {error && <Error>Something went wrong</Error>}
        <Link>Forgot Password?</Link>
        <Link>Create New Account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
