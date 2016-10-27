import React from 'react';
import styles from '../css/CenterDetail.css';

class CenterDetail extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Tuesday, January 12th</p>
          <p>5:30 – 7:30pm at Manifesto</p>
        </div>
        <div className={styles.subtitle}>
          123 Fake Street, Portland, OR
        </div>
        <div className={styles.description}>
          Join us for food, drinks, more lively conversations, and DJ Listen Lady. Make sure to bring professional clothing or shoes you can spare to donate to Dress for Success.
        </div>
        <div className={styles.linkContainer}>
          <a className={styles.link}>RSVP</a>
          <a className={styles.link}>Code of Conduct</a>
        </div>
      </div>
    )
  }
}

export default CenterDetail;
