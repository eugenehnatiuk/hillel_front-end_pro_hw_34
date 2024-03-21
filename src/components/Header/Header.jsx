import React from 'react';
import './header.scss';
import MenuItem from './MenuItems/Menuitem';
import Logo from './Logo/Logo';

const menuProps = [
  ['Main', 'header__navmenu-item', '/'],
  ['FAQ', 'header__navmenu-item', '/questions'],
  ['Content', 'header__navmenu-item', '/content'],
  ['Contacts', 'header__navmenu-item', '/contacts'],
];

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header ">
        <Logo />
        <nav className="header__navmenu ">
          <ul className="header__navmenu-list ">
            {menuProps.map(([title, cssClass, link]) => (
              <MenuItem key={title} className={cssClass} title={title} link={link} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
