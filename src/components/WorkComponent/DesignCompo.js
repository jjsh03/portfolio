import React, { useCallback, useRef } from 'react';
import DesignCard from '../designCard/DesignCard';
import './DesignCompoStyle.scss';
import artboard1 from '../../asset/artboard1.png';
import artboard2 from '../../asset/artboard2.png';
import artboard3 from '../../asset/artboard3.png';
import artboard4 from '../../asset/poster1.png';
import artboard5 from '../../asset/poster2.png';
import artboard6 from '../../asset/poster3.png';
import prevIcon from '../../asset/prev.svg';
import nextIcon from '../../asset/next.svg';
import Slider from 'react-slick';
import modal1 from '../../asset/beatbay_figma.png';
import modal2 from '../../asset/mealsac_figma.png';
import modal3 from '../../asset/portfolio_figma.png';

export default function DesignCompo() {
  const artboards = [
    {
      id: 1,
      name: '비트베이',
      type: 'FIGMA',
      img: artboard1,
      modal: modal1,
    },
    {
      id: 2,
      name: '밀싹',
      type: 'FIGMA',
      img: artboard2,
      modal: modal2,
    },
    {
      id: 3,
      name: '포트폴리오',
      type: 'FIGMA',
      img: artboard3,
      modal: modal3,
    },
    {
      id: 4,
      name: '틈',
      type: 'POSTER',
      img: artboard4,
      modal: artboard4,
    },
    {
      id: 5,
      name: 'FASHION',
      type: 'POSTER',
      img: artboard5,
      modal: artboard5,
    },
    {
      id: 6,
      name: 'SUMMER',
      type: 'POSTER',
      img: artboard6,
      modal: artboard6,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: false,

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

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <section className="section designSection">
      <div className="prev" onClick={previous}>
        <img src={prevIcon} alt="prev-arrow" />
      </div>
      <div className="designList">
        <Slider {...sliderSettings} ref={slickRef}>
          {artboards.map((artboard) => (
            <DesignCard key={artboard.id} data={artboard} />
          ))}
        </Slider>
      </div>
      <div className="next" onClick={next}>
        <img src={nextIcon} alt="next-arrow" />
      </div>
    </section>
  );
}
