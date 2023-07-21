import styled from '@emotion/styled';

export const Box = styled.div`
  margin-left: 50px;
`;
export const Text = styled.p`
  font-size: large;
  font-weight: 500;
  color: white;
`;
export const TextList = styled.ul`
  font-size: large;
  font-weight: 400;
  color: white;
`;
export const Button = styled.button`
  background-color: white;
  border-radius: 80%;
  margin-left: 10px;
  border: none;
  padding: 5px;
  width: 50px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #941cd4;
  }
  &:active {
    box-shadow: 0 0 2px darkslategray;
    transform: translateY(2px);
  }
`;

// margin-left: 7px;
// width: 50px;
// background-color: transparent;
// border-color: white;
// border-radius: 5px;
// color: white;
