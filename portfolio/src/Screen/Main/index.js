import React from 'react';
import Header from '../../components/Header/Header';
import './style.scss';

export default function Main() {
  return (
    <>
      <Header />
      <div className='container mainContainer'>
        <section className='introSection'> INTRO</section>
        <section className='aboutSection'>2</section>
        <section className='workSection'>3</section>
        <section className='contactSection'>4</section>
      </div>
    </>
  );
}
