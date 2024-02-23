import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайодено
      </h1>
      <p className={styles.description}>
        На жаль, ця сторінка відсутня у нашому інтернет-магазині.
      </p>
    </div>
  );
};
