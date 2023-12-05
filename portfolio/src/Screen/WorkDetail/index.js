import React from 'react';
import './style.scss';
import { useParams } from 'react-router';
import detailIcon from '../../asset/detailIcon.svg';
import imac from '../../asset/imac.png';

export default function WorkDetail() {
  let params = useParams();
  let detailInfo;
  if (params.id == 2) {
    detailInfo = {
      id: 2,
      name: 'BEATBAY',
      type: 'web',
      team: 'Team project',
      date: '2023. 10. 23 ~ 2023. 11. 10',
      overview: (
        <div>
          비트베이는 음악 거래의 새로운 심지라는 타이틀로 음악인들을 위해 음악
          관련 중고 거래와 재능 마켓을 접목한 웹 서비스 입니다. 위 서비스에서
          제공하는 핵심 기능은 총 5가지 입니다.
          <br />
          <br />
          1. 중고 악기, 재능 거래 페이지 제공
          <br />
          2. 구매한 악기/재능에 대한 리뷰 제공
          <br />
          3. 판매자 구매자간의 1:1 채팅 서비스 제공
          <br />
          4. 관리자 페이지를 통해 유저관리, 게시물 관리 기능 제공
          <br />
          5. 마이페이지 찜한 행사, 리뷰 관리 기능 제공
        </div>
      ),
      links: [
        'https://beatbay.online/',
        'https://github.com/sesac-ydp5-2nd-C/2nd-project-beatbay-front',
      ],
      tools: 'HTML, CSS, JavaScript, Sass, React, Axios, AOS, Figma, Git',
      role: (
        <div>
          • 마이 페이지(대시보드, 구매, 판매, 찜) 및 판매자 페이지 <br />
          • 모달, 마이페이지 탭, 프로필 컴포넌트 <br />
          • useForm등 커스텀 훅 활용한 거래 상품 등록 및 수정 페이지 <br />
          • 공지/칼럼 페이지 <br />• 유저, 칼럼 및 공지, 게시글 관리가 가능한
          관리자 페이지
        </div>
      ),
      thumbnail: '/vinyl.mp4',
    };
  }
  console.log(detailInfo);
  return (
    <div className='container detailContainer'>
      <video autoPlay loop muted playsInline className='backVideo'>
        <source src={detailInfo.thumbnail} type='video/mp4' />
      </video>
      <div className='backPath'>
        <section className='detailTitle'>
          <img src={detailIcon} alt='icon' className='detailIcon' />
          <h1>{detailInfo.name}</h1>
          <p>{detailInfo.type}</p>
        </section>
        <section className='moreInfoSection'>
          <div className='workInfo'>
            <div>
              <h1>{detailInfo.name}</h1>
              <p>{detailInfo.team}</p>
            </div>
            <div>
              <div className='overview'>
                <p className='infoName'>OVERVIEW</p>
                <div>{detailInfo.overview}</div>
              </div>
              <div className='date'>
                <p className='infoName'>DATE</p>
                <div>{detailInfo.date}</div>
              </div>
              <div className='Links'>
                <p className='infoName'>LINKS</p>
                <div>
                  <a
                    href={detailInfo.links[0]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p>배포</p>
                  </a>
                  <a
                    href={detailInfo.links[1]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p>코드</p>
                  </a>
                </div>
              </div>
              <div className='tools'>
                <p className='infoName'>TOOLS</p>
                <div>{detailInfo.tools}</div>
              </div>
              <div className='role'>
                <p className='infoName'>ROLE</p>
                <div>{detailInfo.role}</div>
              </div>
            </div>
          </div>
          <div className='workGif'>
            <img src={imac} alt='imac' className='imac' />
            <div className={`${detailInfo.name}gif`} />
          </div>
        </section>
      </div>
    </div>
  );
}
