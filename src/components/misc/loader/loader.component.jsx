import { Spin } from 'antd';
import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.box}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
