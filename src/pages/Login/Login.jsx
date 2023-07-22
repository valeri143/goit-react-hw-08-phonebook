import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  BackGroundImage,
  StyledH2,
  StyledSection,
  StyledButton,
} from '../Registration/Registartion.styled';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <main>
      <BackGroundImage>
        <section>
          <StyledSection>
            <StyledH2>Login</StyledH2>
            <LoginForm />
            <StyledButton type="button" onClick={() => navigate('/register')}>
              You don't have your own account? Try to sign up
            </StyledButton>
          </StyledSection>
        </section>
      </BackGroundImage>
    </main>
  );
};

export default Login;
