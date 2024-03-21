import React from 'react';
import '../Main/main.scss';

const FAQ = () => {
  return (
    <div className="main-section__faq">
      <h2>Основні питання до всесвіту:</h2>
      <ul className="main-section__faq-list">
        <li className="main-section__faq-item">1. Що?</li>
        <li className="main-section__faq-item">2. Де?</li>
        <li className="main-section__faq-item">3. Коли?</li>
        <li className="main-section__faq-item">2. По чому?</li>
      </ul>
    </div>
  );
};

export default FAQ;
