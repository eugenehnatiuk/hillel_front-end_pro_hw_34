import React from 'react';
import '../header.scss';


const imgUrl = './images/main_photo.jpg';

const Logo = () => (
  <div className="header__logo-box">
    <div className="header__logo">
      <img src={imgUrl} alt="Logo" />
    </div>
    <p>Front-End</p>
  </div>
);

export default Logo;
