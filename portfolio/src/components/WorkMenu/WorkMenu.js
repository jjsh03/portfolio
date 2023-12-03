import React from 'react';
import './style.scss';

export default function WorkMenu({ selectedMenu, setSelectedMenu }) {
  const btnDeco = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='70%'
      viewBox='0 0 16 19'
      fill='none'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 8.98691C4.61497 10.2128 7.9912 14.1207 7.99998 18.7545C8.00876 14.1207 11.385 10.2128 16 8.98691C11.6591 7.83381 8.41414 4.30779 8.03673 0.0367652L7.99996 0L7.96323 0.036728C7.58583 4.30777 4.3409 7.8338 0 8.98691Z'
        fill='#4CAFA9'
      />
    </svg>
  );

  const handleMenuClick = menu => {
    setSelectedMenu(menu);
  };

  return (
    <div className='workMenus'>
      <button
        className={`webMenu ${selectedMenu === 'web' ? 'clicked' : ''}`}
        onClick={() => handleMenuClick('web')}
      >
        {btnDeco}web
      </button>
      <button
        className={`designMenu ${selectedMenu === 'design' ? 'clicked' : ''}`}
        onClick={() => handleMenuClick('design')}
      >
        {btnDeco}design
      </button>
      <button
        className={`othersMenu ${selectedMenu === 'others' ? 'clicked' : ''}`}
        onClick={() => handleMenuClick('others')}
      >
        {btnDeco}others
      </button>
    </div>
  );
}
