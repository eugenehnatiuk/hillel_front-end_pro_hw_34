import React from 'react';
import './menuitem.scss';



const MenuItem = ({ title, navMenuItem }) => {
  return <li className={navMenuItem}>{title}</li>;
};

export default MenuItem;
