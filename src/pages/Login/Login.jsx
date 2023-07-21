import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  BackGroundImage,
  StyledH2,
  StyledSection,
} from '../Registration/Registartion.styled';

export const Login = () => {
  return (
    <main>
      <BackGroundImage>
        <section>
          <StyledSection>
            <StyledH2>Login</StyledH2>
            <LoginForm />
          </StyledSection>
        </section>
      </BackGroundImage>
    </main>
  );
};

export default Login;
