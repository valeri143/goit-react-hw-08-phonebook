import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userAuthSlice/operations';
import { selectUser } from 'redux/userAuthSlice/selectors';
import { StyledP, StyledDiv, StyledButton } from './UserMenu.styled';
import { RxExit } from 'react-icons/rx';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUser).email;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledDiv>
      <StyledP>{email}</StyledP>
      <StyledButton onClick={handleLogOut} type="button">
        <RxExit />
      </StyledButton>
    </StyledDiv>
  );
};
