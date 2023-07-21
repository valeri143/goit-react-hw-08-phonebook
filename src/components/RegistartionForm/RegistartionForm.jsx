import React from 'react';
import { FormStyled, Input, Button, Label } from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Error } from 'components/Error';
import { register } from 'redux/userAuthSlice/operations';

const scheme = yup.object().shape({
  name: yup.string().min(3, 'Too Short!').required(),
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required(),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <FormStyled>
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={Error} />
          </Label>
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
          <Button type="submit">Register</Button>
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
