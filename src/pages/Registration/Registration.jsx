import { RegistrationForm } from 'components/RegistartionForm/RegistartionForm';
import {
  BackGroundImage,
  StyledH2,
  StyledSection,
} from './Registartion.styled';

const Registartion = () => {
  return (
    <main>
      <BackGroundImage>
        <section>
          <StyledSection>
            <StyledH2>Registration</StyledH2>
            <RegistrationForm />
          </StyledSection>
        </section>
      </BackGroundImage>
    </main>
  );
};

export default Registartion;
