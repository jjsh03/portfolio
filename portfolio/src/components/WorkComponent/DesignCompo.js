import React from 'react';
import DesignCard from '../designCard/DesignCard';
import './DesignCompoStyle.scss';
import artboard1 from '../../asset/artboard1.png';
import artboard2 from '../../asset/artboard2.png';
import artboard3 from '../../asset/artboard3.png';
import artboard4 from '../../asset/poster1.png';
import artboard5 from '../../asset/poster2.png';
import artboard6 from '../../asset/poster3.png';
import Slider from 'react-slick';

export default function DesignCompo() {
  const artboards = [
    {
      id: 1,
      name: '비트베이',
      type: 'FIGMA',
      img: artboard1,
    },
    {
      id: 2,
      name: '밀싹',
      type: 'FIGMA',
      img: artboard2,
    },
    {
      id: 3,
      name: '포트폴리오',
      type: 'FIGMA',
      img: artboard3,
    },
    {
      id: 4,
      name: '틈',
      type: 'POSTER',
      img: artboard4,
    },
    {
      id: 5,
      name: 'FASHION',
      type: 'POSTER',
      img: artboard5,
    },
    {
      id: 6,
      name: 'SUMMER',
      type: 'POSTER',
      img: artboard6,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    // responsive: [
    //   // 반응형 옵션
    //   {
    //     breakpoint: 780,
    //     settings: {
    //       slidesToShow: 2,
    //       arrows: true,
    //     },
    //   },
    // ],
  };

  return (
    <section className='section designSection'>
      <div className='designList'>
        <Slider {...sliderSettings}>
          {artboards.map(artboard => (
            <DesignCard key={artboard.id} data={artboard} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
