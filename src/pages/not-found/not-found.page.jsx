import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.box}>
        <div className={styles.textContent}>
          <strong>404</strong>
          <span>The page you requested was not found.</span>
        </div>
        <Link to="/dashboard" className={cn('btn-info', styles.notFound)}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
