import { RegistrationForm } from 'components/RegistartionForm/RegistartionForm';
import {
  BackGroundImage,
  StyledH2,
  StyledSection,
  StyledButton,
} from './Registartion.styled';
import { useNavigate } from 'react-router-dom';

const Registartion = () => {
  const navigate = useNavigate();

  return (
    <main>
      <BackGroundImage>
        <section>
          <StyledSection>
            <StyledH2>Registration</StyledH2>
            <RegistrationForm />
            <StyledButton type="button" onClick={() => navigate('/login')}>
              Do you have your own account? Try to enter
            </StyledButton>
          </StyledSection>
        </section>
      </BackGroundImage>
    </main>
  );
};

export default Registartion;
