import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/userAuthSlice/selectors';
import {
  StyledHeader,
  StyledNavLink,
  StyledNav,
  StyledDiv,
} from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to={'/'}>HomePage</StyledNavLink>
        {isLoggedIn ? (
          <StyledNavLink to={'/contacts'}>PhoneBook</StyledNavLink>
        ) : (
          <StyledDiv>
            <StyledNavLink to={'/register'}>Registartion</StyledNavLink>
            <StyledNavLink to={'login'}>LogIn</StyledNavLink>
          </StyledDiv>
        )}
      </StyledNav>
      {isLoggedIn && <UserMenu />}
    </StyledHeader>
  );
};
