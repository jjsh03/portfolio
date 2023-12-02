import React from 'react';
import './style.scss';
import WorkMenu from '../../components/WorkMenu/WorkMenu';
import Header from '../../components/Header/Header';

export default function Work() {
  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };
  window.addEventListener('resize', setVh);
  setVh();

  return (
    <div className='container workContainer'>
      <Header />
      <WorkMenu />
      <section className='section webSection'>1</section>
      <section className='section designSection'>2</section>
      <section className='section othersSection'>3</section>
    </div>
  );
}
