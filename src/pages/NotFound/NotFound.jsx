import {
  StyledButton,
  BackGroundImage,
  StyledH1,
  StyledH2,
} from 'pages/Home/Home.styled';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <BackGroundImage>
      <StyledH1>Ooops something went wrong</StyledH1>
      <div style={{ display: 'flex', gap: 8 }}>
        <StyledH2>Click here to return to the HomePage: </StyledH2>
        <StyledButton
          style={{ marginTop: 15 }}
          type="button"
          onClick={() => navigate('/')}
        >
          Home
        </StyledButton>
      </div>
    </BackGroundImage>
  );
};
