import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { HashLoader } from 'react-spinners';

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = artboards.map(({ img }) => {
      const image = new Image();
      image.src = img;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section className="section designSection">
      {loading && (
        <div className="loading">
          <h2>Loading</h2>
          <HashLoader color="#4cafa9" size={100} />
        </div>
      )}
      {!loading && (
        <>
          <div className="prev" onClick={previous}>
            <img src={prevIcon} alt="이전 화살표" />
          </div>
          <div className="designList">
            <Slider {...sliderSettings} ref={slickRef}>
              {artboards.map((artboard) => (
                <div key={artboard.id} className="slick-slide">
                  <DesignCard data={artboard} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="next" onClick={next}>
            <img src={nextIcon} alt="다음 화살표" />
          </div>
        </>
      )}
    </section>
  );
}
