import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const StatusHealth = ({ healthScore }) => (
  <tr className={styles.statusIconRow}>
    <td><img src="https://s3-us-west-1.amazonaws.com/yelpreactorsidebaricons/health.png" className={styles.statusHealth} alt="#" /></td>
    <td className={styles.statusScore}>
      <b className={styles.healthScoreLink}>Health Score</b>
      <b id="health-score">
        &nbsp;&nbsp;
        {healthScore}
        &nbsp;out of 100
      </b>
    </td>
  </tr>
);

export default StatusHealth;

StatusHealth.propTypes = {
  healthScore: PropTypes.number,
};

StatusHealth.defaultProps = {
  healthScore: null,
};
