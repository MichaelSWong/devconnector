import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      <br />
      <span>Local Storage Token: {localStorage.getItem('token')}</span>
    </div>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
