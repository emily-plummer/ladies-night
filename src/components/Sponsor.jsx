import React from 'react';
import styles from '../css/Sponsor.css';

class Sponsor extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.sponsorLogo} src="http://static1.squarespace.com/static/55390d4de4b09e35ffdd05d4/t/56d732bd20c647a0f86a0c5d/1477434725700/%3Fformat=1500w"/>
        <a href="#" className={styles.sponsorLink}>Visit our sponsor</a>
      </div>
    )
  }
}

export default Sponsor;
