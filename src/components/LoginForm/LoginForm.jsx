import React from 'react';
import {
  FormStyled,
  Input,
  Button,
  Label,
} from '../RegistartionForm/RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Error } from 'components/Error';
import { logIn } from 'redux/userAuthSlice/operations';

const scheme = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Loged in successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <FormStyled>
          <Label>
            Email
            <Input type="text" name="email" />
            <ErrorMessage name="email" component={Error} />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password" component={Error} />
          </Label>
          <Button type="submit">LogIn</Button>
        </FormStyled>
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
