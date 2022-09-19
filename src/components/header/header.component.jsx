import { Button } from 'antd';
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../configs/firebase.config.js';
import styles from './header.module.scss';

const Header = () => {
  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <header className={styles.box}>
      <div className="container">
        <div className={styles.flex}>
          <Link to="/dashboard">
            <h1>Expense Tracker</h1>
          </Link>
          <Button onClick={handleSignOut} className={cn('btn-light', styles.logout)}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
