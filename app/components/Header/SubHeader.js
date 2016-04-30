import React from 'react';

import styles from './style';

const SubHeader = ({children}) => {
  return <h2 className={styles.tagline}>
    {children.split(' ').map((word) => {
      const arr = word.split('');
      let firstLetter = arr.shift();
      return (<span key={firstLetter}><strong>{firstLetter}</strong>{arr.join('')} </span>);
    })}
  </h2>;
};

SubHeader.displayName = 'SubHeader';

export default SubHeader;
