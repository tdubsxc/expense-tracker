import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../configs/firebase.config';
import { closeModal } from '../../../store/slices/modal.slice';
import ModalWrapper from '../../misc/modal/modal-wrapper.component';
import AuthForm from '../auth-form/auth-form.component.jsx';
import GoogleButton from '../google-button/google-button.component';

const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    setIsSubmitting(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setIsSubmitting(false);
      dispatch(closeModal());
    } catch (error) {
      setIsSubmitting(false);
      if (error.code === 'auth/weak-password') {
        setError({ type: error.code, msg: 'Password must be greater than six (6) characters in length.' });
      } else if (error.code === 'auth/email-already-in-use') {
        setError({ type: error.code, msg: 'This email address is already being used.' });
      } else {
        setError({ msg: 'Problem signing up with email and/or password.' });
      }
    }
  };

  return (
    <ModalWrapper
      title="Get Started Today"
      footer={
        <>
          <Button
            form="registration-form"
            htmlType="submit"
            loading={isSubmitting}
            className="btn-primary"
            style={{ padding: '1rem 2rem', fontSize: 16, width: '100%' }}
          >
            Sign Up
          </Button>
          <GoogleButton />
        </>
      }
    >
      <AuthForm handleSubmit={handleSubmit} formError={error} />
    </ModalWrapper>
  );
};

export default SignUpForm;
