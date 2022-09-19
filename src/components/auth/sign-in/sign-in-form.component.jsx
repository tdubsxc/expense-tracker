import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../configs/firebase.config.js';
import { closeModal } from '../../../store/slices/modal.slice.js';
import ModalWrapper from '../../misc/modal/modal-wrapper.component';
import AuthForm from '../auth-form/auth-form.component';
import GoogleButton from '../google-button/google-button.component.jsx';

const SignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    setIsSubmitting(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsSubmitting(false);
      dispatch(closeModal());
    } catch (error) {
      setIsSubmitting(false);
      if (error.code === 'auth/wrong-password') {
        setError({ type: error.code, msg: 'Password is invalid. Please try again.' });
      } else {
        setError({ msg: 'Problem signing in with email and/or password.' });
      }
    }
  };

  return (
    <ModalWrapper
      title="Welcome Back"
      footer={
        <>
          <Button
            form="registration-form"
            htmlType="submit"
            loading={isSubmitting}
            className="btn-primary"
            style={{ padding: '1rem 2rem', fontSize: 16, width: '100%' }}
          >
            Sign In
          </Button>
          <GoogleButton />
        </>
      }
    >
      <AuthForm handleSubmit={handleSubmit} formError={error} />
    </ModalWrapper>
  );
};

export default SignInForm;
