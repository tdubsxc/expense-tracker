import PropTypes from 'prop-types';
import React from 'react';
import styles from './expense-banner.module.scss';

const ExpenseBanner = ({ title }) => {
  return (
    <section className={styles.box}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
      </div>
    </section>
  );
};

ExpenseBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ExpenseBanner;
