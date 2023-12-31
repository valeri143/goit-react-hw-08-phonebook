import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  height: 55px;
  padding: 5px 15px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  @media (max-width: 530px) {
    display: block;
  }
  border-bottom: 0 solid white;
  transition: border-bottom-width 0.3s;
  &:hover {
    border-bottom-width: 5px;
  }
`;
export const StyledFooter = styled.footer`
  color: rgba(90, 35, 114, 0.38);
  height: 40px;
  padding: 20px 15px;
  background-color: black;
  border-top: 0 solid white;
  transition: border-top-width 0.3s;
  &:hover {
    border-top-width: 5px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
`;
export const StyledNavLink = styled(NavLink)`
  margin-right: 8px;
  color: white;
  text-decoration: none;
  &:active {
    text-decoration: revert;
  }
  &:hover {
    text-decoration: revert;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
`;
