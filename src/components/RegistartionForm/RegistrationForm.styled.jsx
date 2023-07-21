import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  max-height: 350px;
  border: 3px dashed white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const Input = styled(Field)`
  width: 230px;
  height: 18px;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;
export const Label = styled.label`
  color: white;
  font-size: larger;
  display: contents;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-color: white;
  color: white;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 5px;
`;
