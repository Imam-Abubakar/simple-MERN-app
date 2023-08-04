import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      Landing Page
      <Link to='/login'>Go to Login Page</Link>
    </div>
  );
};

export default Landing;
