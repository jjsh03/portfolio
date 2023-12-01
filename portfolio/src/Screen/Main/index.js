import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './IntroSection.scss';
import star from '../../asset/star.svg';
import WaterWave from 'react-water-wave';
import './AboutSection.scss';
import communicate from '../../asset/communicate.gif';
import levelup from '../../asset/levelup.gif';
import partner from '../../asset/partner.gif';
import planning from '../../asset/planning.gif';
import trendy from '../../asset/trendy.gif';

export default function Main() {
  const [hoveredSpan, setHoveredSpan] = useState(null);
  const [hoverGif, setHoverGif] = useState(null);

  useEffect(() => {
    console.log(hoveredSpan);
    console.log(hoverGif);
  });

  return (
    <div className="container mainContainer">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
      <Header />
      <WaterWave>
        {(methods) => (
          <section className="section introSection">
            <div className="introText">
              <div className="mainTitle">
                <h1>
                  파동 같은 사람
                  <br />
                  JEON SUHYEON
                </h1>
                <h1>파동</h1>
              </div>
              <p>
                작은 돌멩이가 호수에 던져지면서 일어난 파동은 결국 호수 끝까지
                도달하게 됩니다.
                <br />
                호수 전체를 예측하며 퍼져나가는 사람, 다른 사람과 만나 공명할 줄
                아는 사람,
                <br />
                잔잔하게, 그리고 깊이 있게 꾸준히 나아가는 전수현입니다.
              </p>
              <button className="readMore">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 277 83"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M270.023 40.5419C268.779 41.9513 267.285 43.3688 265.543 44.789C259.124 50.0245 249.545 55.1219 237.47 59.7826C213.334 69.0989 179.445 76.5869 141.534 80.0107C139.302 80.2122 137.081 80.3975 134.872 80.5666C97.2792 77.7848 63.6168 70.9511 39.514 62.1455C27.3568 57.704 17.6873 52.7808 11.1741 47.6623C9.16024 46.0796 7.46791 44.4947 6.10023 42.9153C7.35001 41.4958 8.85291 40.0682 10.6069 38.6377C17.0263 33.4022 26.6052 28.3048 38.68 23.6441C62.7118 14.3682 96.4114 6.90481 134.124 3.46081C136.512 3.5976 138.915 3.75294 141.331 3.92715C179.298 6.66445 213.317 13.538 237.618 22.4161C249.775 26.8575 259.444 31.7808 265.957 36.8992C267.502 38.1133 268.858 39.3287 270.023 40.5419ZM270.674 39.7774C254.096 22.6174 202.866 7.36102 141.403 2.92974C141.225 2.91692 141.047 2.9042 140.869 2.89158C176.332 0.146207 208.614 1.55505 232.624 6.12883C245.339 8.55078 255.676 11.8495 262.93 15.8502C270.22 19.8712 274.161 24.4634 274.605 29.3832C274.908 32.7348 273.587 36.2276 270.674 39.7774ZM271.363 40.5132C274.447 36.7903 275.938 33.0204 275.601 29.2933C273.642 7.59219 210.48 -4.43933 134.526 2.42011C134.386 2.43275 134.246 2.44545 134.107 2.4582C61.3531 -1.69823 2.35365 11.317 0.837168 32.351C0.582313 35.8859 1.96666 39.4296 4.79102 42.9093C1.70377 46.6335 0.211917 50.4049 0.548644 54.1335C2.45012 75.1883 61.9624 87.1409 134.874 81.5694C135.158 81.5904 135.443 81.6112 135.729 81.6318C211.794 87.1158 274.727 73.9435 276.294 52.2105C276.577 48.2891 274.842 44.3568 271.363 40.5132ZM270.706 41.2776C255.008 58.9433 203.639 75.406 141.624 81.0066C141.595 81.0092 141.567 81.0117 141.538 81.0143C177.251 83.1684 209.702 81.1808 233.744 76.1487C246.412 73.4971 256.688 70.0119 263.868 65.8806C271.084 61.7283 274.942 57.0657 275.297 52.1386C275.551 48.6094 274.008 44.9567 270.706 41.2776ZM128.202 81.031C68.8222 75.8299 20.2382 60.5811 5.44608 43.6858C2.55401 47.2231 1.24294 50.7034 1.54459 54.0435C1.9889 58.9633 5.92993 63.5555 13.2204 67.5765C20.4739 71.5772 30.8111 74.8759 43.5256 77.2979C65.9287 81.5654 95.5326 83.0777 128.202 81.031ZM5.45331 42.1385C20.5532 25.1623 68.59 9.29908 127.356 3.1207C94.9038 1.71927 65.5674 3.77048 43.3879 8.41279C30.7194 11.0644 20.4436 14.5497 13.2636 18.6809C6.0471 22.8332 2.1898 27.4959 1.83458 32.4229C1.60657 35.5855 2.82217 38.8473 5.45331 42.1385Z"
                    fill="white"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="white"
                    font-size="22"
                    font-family="PyeongChang"
                  >
                    READMORE
                  </text>
                </svg>
              </button>
            </div>
            <div className="introPics">
              <div className="waveImg" />
              <div className="twinkleProfile">
                <div className="profileImg" />
                <img src={star} alt="star" className="stars littleStar" />
                <img src={star} alt="star" className="stars bigStar" />
              </div>
            </div>
          </section>
        )}
      </WaterWave>
      <section className="section aboutSection">
        <div className="aboutMe">ABOUT ME</div>
        <div className="aboutContent">
          <div className="aboutText">
            <p className="aboutOverviewTitle">Overview</p>
            <p className="overviewContent">
              도전적인 목표를 두고{' '}
              <span
                onMouseEnter={() => {
                  setHoveredSpan('span1');
                  setHoverGif(planning);
                }}
                onMouseLeave={() => {
                  setHoveredSpan(null);
                  setHoverGif(null);
                }}
              >
                계획을 수립
              </span>
              하고 실행하여 그 결과를 맛보는 것을 좋아합니다.
              <br />
              <span
                onMouseEnter={() => {
                  setHoveredSpan('span2');
                  setHoverGif(communicate);
                }}
                onMouseLeave={() => {
                  setHoveredSpan(null);
                  setHoverGif(null);
                }}
              >
                뛰어난 커뮤니케이션 능력
              </span>
              으로 PR 회사에 재직하는 중 클라이언트에게{' '}
              <span
                onMouseEnter={() => {
                  setHoveredSpan('span3');
                  setHoverGif(partner);
                }}
                onMouseLeave={() => {
                  setHoveredSpan(null);
                  setHoverGif(null);
                }}
              >
                “언제나 최고의 파트너”
              </span>
              라는 평을 들었습니다. <br />
              좋아하는 것에 몰두하는 소위 ʻ오타쿠’적 면모가 있어{' '}
              <span
                onMouseEnter={() => {
                  setHoveredSpan('span4');
                  setHoverGif(levelup);
                }}
                onMouseLeave={() => {
                  setHoveredSpan(null);
                  setHoverGif(null);
                }}
              >
                배움에 빠른 성장 속도
              </span>
              를 보여줍니다. <br />
              사용자의 눈과 마음을 사로 잡는{' '}
              <span
                onMouseEnter={() => {
                  setHoveredSpan('span5');
                  setHoverGif(trendy);
                }}
                onMouseLeave={() => {
                  setHoveredSpan(null);
                  setHoverGif(null);
                }}
              >
                효율적이면서 트렌디한 디자인
              </span>
              을 추구합니다.
            </p>
            <p className="aboutSkillTitle">Skill</p>
            <div className="skillContent">
              <p>
                개발 기술.
                <br />그 외.
              </p>
              <p className="skills">
                HTML, CSS, JavaScript, React.js, SASS, TypeScript
                <br />
                Git, Figma, Photoshop, Illustrator, Premiere Pro, AfterEffects
              </p>
            </div>
          </div>
          <div className="aboutPics">
            <div
              className="aboutGif"
              style={{
                backgroundImage: `url(${hoverGif})`,
                backgroundSize: 'cover',
              }}
            />
          </div>
        </div>
      </section>
      <section className="section workSection">3</section>
      <section className="section contactSection">4</section>
    </div>
  );
}
