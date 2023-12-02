import React from 'react';
import './style.scss';

export default function HeaderMenu() {
  return (
    <div className='header'>
      <a href='#intro'>
        <div>INTRO</div>
      </a>
      <a href='#about'>
        <div>ABOUT</div>
      </a>
      <a href='#work'>
        <div>WORK</div>
      </a>
      <a href='#contact'>
        <div>CONTACT</div>
      </a>
    </div>
  );
}
