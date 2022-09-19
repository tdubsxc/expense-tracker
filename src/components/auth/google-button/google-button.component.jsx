import { Button, Divider } from 'antd';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { auth, googleAuthProvider } from '../../../configs/firebase.config.js';
import { closeModal } from '../../../store/slices/modal.slice.js';
import styles from './google-button.module.scss';

const GoogleButton = () => {
  const dispatch = useDispatch();

  const handleContinueWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    dispatch(closeModal());
  };

  return (
    <div className={styles.box}>
      <Divider>or</Divider>
      <Button onClick={handleContinueWithGoogle} className="btn" icon={<FcGoogle size={22} className={styles.icon} />}>
        Continue with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
