import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, className, link }) => {
  return (
    <li className={className}>
      <NavLink to={link} >{title}</NavLink>
    </li>
  );
};

export default MenuItem;
