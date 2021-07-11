import React from 'react';
import styles from './Toggle.module.scss';

export default function Toggle({ toggled, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${styles.toggle}${toggled ? ` + ${styles.night} ` : ''}`}
    >
      <div className={styles.notch}>
        <div className={styles.crater} />
        <div className={styles.crater} />
      </div>
      <div>
        <div className={`${styles.shape} ${styles.sm}`} />
        <div className={`${styles.shape} ${styles.sm}`} />
        <div className={`${styles.shape} ${styles.md}`} />
        <div className={`${styles.shape} ${styles.lg}`} />
      </div>
    </div>
  );
}
