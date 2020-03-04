import React from 'react';
// import './test.less'
import styles from './test.module.less'
// console.log(hehe)
function Test1() {
  return (
    <div className={styles.test}>
       <span className={styles.span}>
         color:red
       </span>
       
    </div>
  );
}

export default Test1;
