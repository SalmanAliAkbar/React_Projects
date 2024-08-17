import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <Link to="/">My Recipe App</Link>
      </h1>
    </header>
  );
};

export default Header;
