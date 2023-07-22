import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Box = styled.div`
  margin-left: 50px;
  @media (max-width: 530px) {
    margin-left: 20px;
  }
`;
export const Title = styled.h1`
  font-size: xx-large;
  color: white;
`;
export const FormStyled = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (max-width: 530px) {
    width: 250px;
  }
  max-height: 250px;
  border: 3px solid white;
`;
export const Input = styled(Field)`
  width: 160px;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  color: white;
  font-size: larger;
  display: contents;
`;

export const Button = styled.button`
  width: 100px;
  background-color: transparent;
  color: white;
  border-color: gray;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;
