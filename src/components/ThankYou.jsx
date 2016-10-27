import React from 'react';
import styles from '../css/ThankYou.css';

class ThankYou extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.thankYou}>Thank You</p>
        <ul className={styles.names}>
          <li>Hilarly Clinton</li>
          <li>Leslie Knope</li>
          <li>Beyonce</li>
        </ul>
      </div>
    )
  }
}

export default ThankYou;
