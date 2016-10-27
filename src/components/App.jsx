import React from 'react';
import Header from '../components/Header';
import styles from '../css/app.css';
import CenterDetail from '../components/CenterDetail';
import Sponsor from '../components/Sponsor';
import GreyRightDetail from '../components/GreyRightDetail';
import ThankYou from '../components/ThankYou';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>
        <CenterDetail/>
        <Sponsor/>
        <GreyRightDetail/>
        <ThankYou/>
      </div>
    )
  }
}

export default App;
