import React from 'react';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../store/slices/modal.slice.js';
import SignInForm from '../../auth/sign-in/sign-in-form.component';
import SignUpForm from '../../auth/sign-up/sign-up-form.component';

const ModalManager = () => {
  const modals = {
    SignUpForm,
    SignInForm,
  };

  const { modalType, modalProps, isVisible } = useSelector(modalSelector);
  let renderedModal;

  if (isVisible) {
    const ModalComponent = modals[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <div>{renderedModal}</div>;
};

export default ModalManager;
