import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import HeaderMenu from '../../components/Header/Header';
import './IntroSection.scss';
import './AboutSection.scss';
import './WorkSection.scss';
import './ContactSection.scss';
import star from '../../asset/star.svg';
import WaterWave from 'react-water-wave';
import communicate from '../../asset/communicate.gif';
import levelup from '../../asset/levelup.gif';
import partner from '../../asset/partner.gif';
import planning from '../../asset/planning.gif';
import trendy from '../../asset/trendy.gif';
import letterDeco from '../../asset/letterdeco.svg';
import wave from '../../asset/wave.gif';
import { useNavigate } from 'react-router-dom';
import { ScrollToTopOnMount, Section, SectionsContainer } from 'react-fullpage';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Main() {
  const [hoveredSpan, setHoveredSpan] = useState(null);
  const [hoverGif, setHoverGif] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGifVisible, setIsGifVisible] = useState(false);

  const handleSpanHover = (spanKey, gif) => {
    setHoveredSpan(spanKey);
    setHoverGif(gif);
    setIsGifVisible(true);
  };

  const handleSpanClick = (spanKey, gif) => {
    setHoveredSpan(null);
    setHoverGif(null);
    setHoveredSpan(spanKey);
    setHoverGif(gif);
  };

  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`
    );
  };
  window.addEventListener('resize', setVh);
  setVh();

  const btnDeco = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="70%"
      viewBox="0 0 16 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.98691C4.61497 10.2128 7.9912 14.1207 7.99998 18.7545C8.00876 14.1207 11.385 10.2128 16 8.98691C11.6591 7.83381 8.41414 4.30779 8.03673 0.0367652L7.99996 0L7.96323 0.036728C7.58583 4.30777 4.3409 7.8338 0 8.98691Z"
        fill="#4CAFA9"
      />
    </svg>
  );

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15%"
      viewBox="0 0 62 62"
      fill="none"
    >
      <path
        d="M60.7928 7.31151C60.7198 4.45546 58.3453 2.081 55.4892 2.00794L8.94598 0.819355C6.08995 0.746322 3.83397 3.00231 3.90664 5.8587C3.97969 8.71474 6.35415 11.0892 9.2102 11.1623L50.582 12.2187L51.6387 53.5907C51.7116 56.4467 54.0859 58.8209 56.9422 58.8942C59.7985 58.9668 62.0545 56.7108 61.9815 53.8549L60.7928 7.31151ZM2.83074 60.3993C4.78336 62.3519 7.94919 62.3519 9.90181 60.3993L59.3715 10.9296L51.8712 3.42922L2.40148 52.8989C0.448855 54.8516 0.44885 58.0174 2.40147 59.97L2.83074 60.3993Z"
        fill="white"
      />
    </svg>
  );

  let options = {
    anchors: ['intro', 'about', 'work', 'contact'],
    navigation: false,
    delay: 700,
  };

  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'sage_0801',
        'template_awj6ydd',
        form.current,
        '6Qyj1gc3dsDx0gg1S'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: '📬',
            text: '연락해주셔서 감사합니다!',
            icon: 'success',
            confirmButtonText: '확인',
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: '😥',
            text: '메시지 전송에 실패했습니다',
            icon: 'warning',
            confirmButtonText: '확인',
          });
        }
      );
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const clickContact = (e) => {
    const url = e.currentTarget.textContent;
    window.open(url, '_blank');
  };

  const handleCopy = (event) => {
    const textToCopy = event.currentTarget.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        Toast.fire({
          icon: 'success',
          title: '전화번호가 복사되었습니다!',
        });
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard', error);
      });
  };

  const handleEmail = () => {
    window.location.href = 'mailto:jshyeon@naver.com';
  };

  useEffect(() => {
    const images = [planning, wave];

    const imagePromises = images.map((imagePath) => {
      const image = new Image();
      image.src = imagePath;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mainContainer">
      {loading && (
        <div className="loading">
          <h2>Loading</h2>
          <HashLoader color="#4cafa9" size={100} />
        </div>
      )}
      {!loading && (
        <>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
          <HeaderMenu />
          <SectionsContainer {...options}>
            <ScrollToTopOnMount />
            <Section>
              <WaterWave>
                {(methods) => (
                  <section className="section introSection">
                    <div className="introText">
                      <div className="mainTitle">
                        <h1>
                          파동 같은 개발자
                          <br />
                          JEON SUHYEON
                        </h1>
                        <h1>파동</h1>
                      </div>
                      <p>
                        작은 돌멩이가 호수에 던져지면서 일어난 파동은 결국 호수
                        끝까지 도달하게 됩니다.
                        <br />
                        호수 전체를 예측하며 퍼져나가는 사람, 다른 사람과 만나
                        공명할 줄 아는 사람,
                        <br />
                        잔잔하게, 그리고 깊이 있게 꾸준히 나아가는 전수현입니다.
                      </p>
                      <a href="#about">
                        <button className="readMore">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 277 83"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M270.023 40.5419C268.779 41.9513 267.285 43.3688 265.543 44.789C259.124 50.0245 249.545 55.1219 237.47 59.7826C213.334 69.0989 179.445 76.5869 141.534 80.0107C139.302 80.2122 137.081 80.3975 134.872 80.5666C97.2792 77.7848 63.6168 70.9511 39.514 62.1455C27.3568 57.704 17.6873 52.7808 11.1741 47.6623C9.16024 46.0796 7.46791 44.4947 6.10023 42.9153C7.35001 41.4958 8.85291 40.0682 10.6069 38.6377C17.0263 33.4022 26.6052 28.3048 38.68 23.6441C62.7118 14.3682 96.4114 6.90481 134.124 3.46081C136.512 3.5976 138.915 3.75294 141.331 3.92715C179.298 6.66445 213.317 13.538 237.618 22.4161C249.775 26.8575 259.444 31.7808 265.957 36.8992C267.502 38.1133 268.858 39.3287 270.023 40.5419ZM270.674 39.7774C254.096 22.6174 202.866 7.36102 141.403 2.92974C141.225 2.91692 141.047 2.9042 140.869 2.89158C176.332 0.146207 208.614 1.55505 232.624 6.12883C245.339 8.55078 255.676 11.8495 262.93 15.8502C270.22 19.8712 274.161 24.4634 274.605 29.3832C274.908 32.7348 273.587 36.2276 270.674 39.7774ZM271.363 40.5132C274.447 36.7903 275.938 33.0204 275.601 29.2933C273.642 7.59219 210.48 -4.43933 134.526 2.42011C134.386 2.43275 134.246 2.44545 134.107 2.4582C61.3531 -1.69823 2.35365 11.317 0.837168 32.351C0.582313 35.8859 1.96666 39.4296 4.79102 42.9093C1.70377 46.6335 0.211917 50.4049 0.548644 54.1335C2.45012 75.1883 61.9624 87.1409 134.874 81.5694C135.158 81.5904 135.443 81.6112 135.729 81.6318C211.794 87.1158 274.727 73.9435 276.294 52.2105C276.577 48.2891 274.842 44.3568 271.363 40.5132ZM270.706 41.2776C255.008 58.9433 203.639 75.406 141.624 81.0066C141.595 81.0092 141.567 81.0117 141.538 81.0143C177.251 83.1684 209.702 81.1808 233.744 76.1487C246.412 73.4971 256.688 70.0119 263.868 65.8806C271.084 61.7283 274.942 57.0657 275.297 52.1386C275.551 48.6094 274.008 44.9567 270.706 41.2776ZM128.202 81.031C68.8222 75.8299 20.2382 60.5811 5.44608 43.6858C2.55401 47.2231 1.24294 50.7034 1.54459 54.0435C1.9889 58.9633 5.92993 63.5555 13.2204 67.5765C20.4739 71.5772 30.8111 74.8759 43.5256 77.2979C65.9287 81.5654 95.5326 83.0777 128.202 81.031ZM5.45331 42.1385C20.5532 25.1623 68.59 9.29908 127.356 3.1207C94.9038 1.71927 65.5674 3.77048 43.3879 8.41279C30.7194 11.0644 20.4436 14.5497 13.2636 18.6809C6.0471 22.8332 2.1898 27.4959 1.83458 32.4229C1.60657 35.5855 2.82217 38.8473 5.45331 42.1385Z"
                              fill="white"
                            />
                            <text
                              x="50%"
                              y="50%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fill="white"
                              fontSize="22"
                              fontFamily="PyeongChang"
                            >
                              READMORE
                            </text>
                          </svg>
                        </button>
                      </a>
                    </div>
                    <div className="introPics">
                      <div>
                        <div className="waveImg" />
                        <div className="twinkleProfile">
                          <div className="profileImg" />
                          <img
                            src={star}
                            alt="star"
                            className="stars littleStar"
                          />
                          <img
                            src={star}
                            alt="star"
                            className="stars bigStar"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </WaterWave>
            </Section>
            <Section>
              <section className="section aboutSection">
                <div className="aboutMe">ABOUT ME</div>
                <div className="aboutContent">
                  <div className="aboutText">
                    <p className="aboutOverviewTitle">Overview</p>
                    <p className="overviewContent">
                      도전적인 목표를 두고{' '}
                      <span
                        onMouseEnter={() => {
                          handleSpanHover('span1', planning);
                        }}
                        onMouseLeave={() => {
                          setHoveredSpan(null);
                          setHoverGif(null);
                          setIsGifVisible(false);
                        }}
                        onClick={() => handleSpanClick('span1', planning)}
                      >
                        계획을 수립
                      </span>
                      하고 실행하여 그 결과를 맛보는 것을 좋아합니다.
                      <br />
                      <span
                        onMouseEnter={() => {
                          handleSpanHover('span2', communicate);
                        }}
                        onMouseLeave={() => {
                          setHoveredSpan(null);
                          setHoverGif(null);
                          setIsGifVisible(false);
                        }}
                        onClick={() => handleSpanClick('span2', communicate)}
                      >
                        뛰어난 커뮤니케이션 능력
                      </span>
                      으로 PR 회사에 재직하는 중 클라이언트에게{' '}
                      <span
                        onMouseEnter={() => {
                          handleSpanHover('span3', partner);
                        }}
                        onMouseLeave={() => {
                          setHoveredSpan(null);
                          setHoverGif(null);
                          setIsGifVisible(false);
                        }}
                        onClick={() => handleSpanClick('span3', partner)}
                      >
                        “언제나 최고의 파트너”
                      </span>
                      라는 평을 들었습니다. <br />
                      좋아하는 것에 몰두하는 소위 ʻ오타쿠’적 면모가 있어{' '}
                      <span
                        onMouseEnter={() => {
                          handleSpanHover('span4', levelup);
                        }}
                        onMouseLeave={() => {
                          setHoveredSpan(null);
                          setHoverGif(null);
                          setIsGifVisible(false);
                        }}
                        onClick={() => handleSpanClick('span4', levelup)}
                      >
                        배움에 빠른 성장 속도
                      </span>
                      를 보여줍니다. <br />
                      사용자의 눈과 마음을 사로 잡는{' '}
                      <span
                        onMouseEnter={() => {
                          handleSpanHover('span5', trendy);
                        }}
                        onMouseLeave={() => {
                          setHoveredSpan(null);
                          setHoverGif(null);
                          setIsGifVisible(false);
                        }}
                        onClick={() => handleSpanClick('span5', trendy)}
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
                        Git, Figma, Photoshop, Illustrator, Premiere Pro,
                        AfterEffects
                      </p>
                    </div>
                  </div>
                  <div className="aboutPics">
                    <LazyLoadImage
                      alt="aboutGIF"
                      src={hoverGif}
                      className={`aboutGif lazy  ${
                        isGifVisible ? 'visible' : 'hidden'
                      }`}
                    />
                  </div>
                </div>
              </section>
            </Section>
            <Section>
              <WaterWave>
                {(methods) => (
                  <section className="section workSection">
                    <div className="workTitle">
                      <h1>I hope you like</h1>
                      <h1>MYWORKS</h1>
                      <img
                        src={letterDeco}
                        alt="letterDeco"
                        className="letterDeco"
                      ></img>
                    </div>
                    <div className="workBtns">
                      <button
                        onClick={() =>
                          navigate('/work', { replace: false, state: 'web' })
                        }
                      >
                        {btnDeco}
                        web
                        {btnDeco}
                      </button>
                      <button
                        onClick={() =>
                          navigate('/work', { replace: false, state: 'design' })
                        }
                      >
                        {btnDeco}
                        design
                        {btnDeco}
                      </button>
                      <button
                        onClick={() =>
                          navigate('/work', { replace: false, state: 'others' })
                        }
                      >
                        {btnDeco}
                        others
                        {btnDeco}
                      </button>
                    </div>
                  </section>
                )}
              </WaterWave>
            </Section>
            <Section>
              <WaterWave>
                {(methods) => (
                  <section className="section contactSection">
                    <div className="contactText">
                      {arrow}
                      <table className="contactTable">
                        <tr>
                          <td>PHONE.</td>
                          <td
                            onClick={handleCopy}
                            style={{ cursor: 'pointer' }}
                          >
                            +82 10-6763-6416
                          </td>
                        </tr>
                        <tr>
                          <td>EMAIL</td>
                          <td
                            onClick={handleEmail}
                            style={{ cursor: 'pointer' }}
                          >
                            jshyeon@naver.com
                          </td>
                        </tr>
                        <tr>
                          <td>GITHUB</td>
                          <td
                            onClick={clickContact}
                            style={{ cursor: 'pointer' }}
                          >
                            https://github.com/jjsh03
                          </td>
                        </tr>
                        <tr>
                          <td>BLOG</td>
                          <td
                            onClick={clickContact}
                            style={{ cursor: 'pointer' }}
                          >
                            https://code-sage.tistory.com
                          </td>
                        </tr>
                      </table>
                    </div>
                    <form
                      className="contactForm"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        className="urName"
                        placeholder="Your Name"
                        name="user_name"
                      ></input>
                      <input
                        type="email"
                        className="urMail"
                        placeholder="Your E-Mail"
                        name="user_email"
                      ></input>
                      <textarea
                        className="urContent"
                        placeholder="Content"
                        name="message"
                      />
                      <button
                        className="contactSend"
                        type="submit"
                        value="submit"
                      >
                        SEND
                      </button>
                    </form>
                    <div className="touch">GET IN TOUCH</div>
                  </section>
                )}
              </WaterWave>
            </Section>
          </SectionsContainer>
        </>
      )}
    </div>
  );
}
