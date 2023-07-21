import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from 'redux/userAuthSlice/selectors';
import { useNavigate } from 'react-router-dom';
import {
  BackGroundImage,
  StyledH1,
  StyledSection,
  StyledButton,
  StyledH2,
} from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  const name = useSelector(selectUser).name;
  return (
    <main>
      <BackGroundImage>
        <section>
          <StyledSection>
            {name ? (
              <>
                <StyledH1>{`Welcome, ${name}`}</StyledH1>
                <StyledButton
                  type="button"
                  onClick={() => navigate('/contacts')}
                >
                  Your PhoneBook
                </StyledButton>
              </>
            ) : (
              <>
                <StyledH1>Welcome</StyledH1>
                <StyledH2>
                  If you want to have access to your phonebook
                </StyledH2>
                <StyledButton type="button" onClick={() => navigate('/login')}>
                  click here
                </StyledButton>
              </>
            )}
          </StyledSection>
        </section>
      </BackGroundImage>
    </main>
  );
};

export default Home;
