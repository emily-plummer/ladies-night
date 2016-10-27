import React from 'react';
import styles from '../css/GreyRightDetail.css';

class GreyRightDetail extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Our Sponsor</h2>
        <p className={styles.copy}>Manifesto is an experience digital marketing agency in Portland, OR. Our core specialties include marketing research, SEO, content and strategy development, media marketing, and digital advertising. We’re built to illuminate your brand and spare the conversation</p>
      </div>
    )
  }
}

export default GreyRightDetail;
