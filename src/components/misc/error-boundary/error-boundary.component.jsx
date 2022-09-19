import React, { Component } from 'react';
import styles from './error-boundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <div className={styles.box}>
            <div className={styles.imageBox}>
              <img src="/assets/img/warning.svg" alt="Something went wrong." />
            </div>
            <div className={styles.textContent}>
              <strong>Oops!</strong>
              <span>
                Looks like something went wrong and we were unable to process your request. Please try again later.
              </span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
