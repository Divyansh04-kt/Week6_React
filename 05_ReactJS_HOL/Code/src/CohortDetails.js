import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  // Dynamic title color based on status
  let titleColor = 'blue';
  if (cohort.status.toLowerCase() === 'ongoing') {
    titleColor = 'green';
  }

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{cohort.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
