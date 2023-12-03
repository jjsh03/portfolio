import React, { useState, useEffect } from 'react';
import './style.scss';

export default function HeaderMenu() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActiveSection(hash);
    };

    // 페이지 로드, 메뉴 변경 시 이벤트 등록
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // 컴포넌트 언마운트 이벤트 해제
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // 빈 배열을 전달하여 이펙트 훅이 마운트 시에만 실행되도록 함

  return (
    <div className='header'>
      <a href='#intro'>
        <div className={activeSection === 'intro' ? 'clicked' : ''}>INTRO</div>
      </a>
      <a href='#about'>
        <div className={activeSection === 'about' ? 'clicked' : ''}>ABOUT</div>
      </a>
      <a href='#work'>
        <div className={activeSection === 'work' ? 'clicked' : ''}>WORK</div>
      </a>
      <a href='#contact'>
        <div className={activeSection === 'contact' ? 'clicked' : ''}>
          CONTACT
        </div>
      </a>
    </div>
  );
}
