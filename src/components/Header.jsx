import React from 'react';
import styles from '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        <a href="#" className={styles.navItem}>Events</a>
        <a href="#" className={styles.navItem}>Shop</a>
        <div className={styles.nipple}/>
        <a href="#" className={styles.navItem}>About</a>
        <a href="#" className={styles.navItem}>Contact</a>
      </div>
    )
  }
}

export default Header;
