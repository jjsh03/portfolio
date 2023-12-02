import React, { useEffect } from 'react';
import './style.scss';
import WorkMenu from '../../../components/WorkMenu/WorkMenu';
import Header from '../../../components/Header/Header';

export default function WebWork() {
  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };
  window.addEventListener('resize', setVh);
  setVh();

  useEffect(() => {
    const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      document.documentElement.style.setProperty('--mouseX', `${mouseX}px`);
      document.documentElement.style.setProperty('--mouseY', `${mouseY}px`);
    };

    const webLists = document.querySelectorAll('.webList');
    webLists.forEach(webList => {
      webList.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      webLists.forEach(webList => {
        webList.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <div className='container workContainer'>
      <Header />
      <WorkMenu />
      <section className='section webSection'>
        <div className='webList'>
          <h1>01</h1>
          <h1>MEALSAC</h1>
          <p>teamproject</p>
          <p>
            새싹 영등포 캠퍼스 주변 및 문래동 식당 큐레이팅 및 커뮤니티 웹서비스
            <br />
            HTML, CSS, Javascript, BootStrap, EJS, axios, AOS, Figma, Git
          </p>
        </div>
        <div className='webList'>
          <h1>02</h1>
          <h1>BEATBAY</h1>
          <p>teamproject</p>
          <p>
            음악 관련 중고 거래와 재능 마켓을 접목한 음악 거래 웹 서비스 <br />
            HTML, CSS, JavaScript, Sass, React, Axios, AOS, Figma, Git{' '}
          </p>
        </div>
        <div className='webList'>
          <h1>03</h1>
          <h1>SOMETHING</h1>
          <p>teamproject</p>
          <p>
            세번째 팀플,, <br />
            HTML, CSS, Javascript, ...
          </p>
        </div>
        <div className='webList'>
          <h1>04</h1>
          <h1>PORTFOLIO</h1>
          <p>soloproject</p>
          <p>
            개인 포트폴리오 사이트(현재 사이트) <br />
            HTML, CSS, JavaScript, Sass, React, AOS, Figma, Git{' '}
          </p>
        </div>
      </section>
    </div>
  );
}
