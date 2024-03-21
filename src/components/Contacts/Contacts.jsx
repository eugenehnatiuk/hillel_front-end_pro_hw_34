import React from 'react';


const Contacts = () => {
  return (
    <div className="main-section__contacts">
      <h2>Contacts</h2>
      <ul className="main-section__contacts-list">
        <li className="main-section__contacts-item">
          <span>Adress: </span>Kyiv, Mechnikova str., 14/1
        </li>
        <li className="main-section__contacts-item">
          <span>Phone: </span>0800 123 45 67
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
