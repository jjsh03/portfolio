import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { useParams } from 'react-router';
import detailIcon from '../../asset/detailIcon.svg';
import imac from '../../asset/imac.png';
import MoreDetail from '../../components/MoreDetail/MoreDetail';
import beatbay1 from '../../asset/beatbay1.gif';
import beatbay2 from '../../asset/beatbay2.gif';
import beatbay3 from '../../asset/beatbay3.gif';
import beatbay4 from '../../asset/beatbay4.gif';
import beatbay5 from '../../asset/beatbay5.gif';
import mealsac1 from '../../asset/mealsac1.gif';
import mealsac2 from '../../asset/mealsac2.gif';
import mealsac3 from '../../asset/mealsac3.gif';
import mealsac4 from '../../asset/mealsac4.gif';
import mealsac5 from '../../asset/mealsac5.gif';
import mealsac6 from '../../asset/mealsac6.gif';
import ah1 from '../../asset/ahwhew1.gif';
import ah2 from '../../asset/ahwhew2.gif';
import ah3 from '../../asset/ahwhew3.gif';
import ah4 from '../../asset/ahwhew4.gif';
import pf1 from '../../asset/pf1.gif';
import pf2 from '../../asset/pf2.gif';
import pf3 from '../../asset/pf3.gif';
import pf4 from '../../asset/pf4.gif';
import { HashLoader } from 'react-spinners';
import back from '../../asset/backarrow.svg';

export default function WorkDetail() {
  let params = useParams();
  let detailInfo;

  if (params.id === '1') {
    detailInfo = {
      id: 1,
      name: 'MEALSAC',
      type: 'web',
      team: 'Team project',
      date: '2023. 09. 06 ~ 2023. 09. 22',
      overview: (
        <div>
          청년취업사관학교 영등포 캠퍼스 크루들의 식사 고민을 덜어주기 위한 식당
          큐레이팅 및 커뮤니티 웹서비스입니다. <br />
          위 서비스에서 제공하는 핵심 기능은 총 4가지 입니다.
          <br />
          <br />
          1. 심리테스트와 같은 형식의 메뉴 추천 서비스 <br />
          2. 메뉴 및 태그로 식당 검색 시 식당의 위치를 알 수 있는 지도 레이아웃{' '}
          <br />
          3. 유저들의 자유로운 소통을 위한 커뮤니티 게시판 <br />
          4. 작성한 찜, 리뷰, 게시글을 확인 가능한 유저 페이지
        </div>
      ),
      links: ['https://github.com/sesac-project-E/mealsac'],
      tools: 'HTML, CSS, Javascript, BootStrap, EJS, axios, AOS, Figma, Git',
      role: (
        <div>
          • 유저관련 페이지(회원가입, 로그인, 마이페이지, 회원 정보 수정) <br />
          • 롤링 및 스크롤 애니메이션을 적용한 메인 페이지
          <br />
          • axios통한 찜, 리뷰, 평점 수정
          <br />
          • 목록별 전역 변수를 활용한 페이지네이션 처리
          <br />
          • Figma를 활용한 UX, UI 디자인
          <br />
        </div>
      ),
      thumbnail: '/meal.webm',

      detail: [
        {
          img: [mealsac1],
          h: '사이트 정체성에 알맞은 메인 페이지 구성 및 애니메이션 적용',
          t: [
            '식당 리스트 롤링 애니메이션 적용 → 호버 시 롤링 애니메이션 일시정지 및 크기를 확대하여 사용자 편리함을 증대',
            'AOS를 활용한 스크롤시 페이드업 애니메이션 적용',
            '로그인 상태에 따라 ʻ찜한 식당’이 보여지도록 구현',
            '페이지를 이동하지 않고 메인페이지에서 메뉴 검색 가능 → 유저가 보는 간결한 URL과 데이터를 요청하는 API가 상이하여 새로운 EJS와 라우터를 생성하여 검색 페이지로 이동',
          ],
        },
        {
          img: [mealsac2, mealsac3, mealsac4],
          h: '로그인, 회원가입, 회원 정보 수정 페이지 제작',
          t: [
            '보안 이슈를 최대한 줄이기 위해 사용자 회원 정보는 아이디, 닉네임, 비밀번호만 기입',
            '아이디, 닉네임 중복 확인, 비밀번호 유효성 검사 후 가입 및 수정 가능',
            '회원가입 후 로그인 또는 카카오톡을 이용해 로그인 가능',
          ],
        },
        {
          img: [mealsac5, mealsac6],
          h: '마이페이지에서 자신의 데이터(찜, 리뷰, 글) 조회 및 수정 가능',
          t: [
            '보다 깔끔한 데이터 관리를 위하여 각 목록 버튼 클릭시 api 요청하여 데이터 조회',
            '각 목록의 현재 페이지 상태를 전역변수로 관리, 목록이 바뀔 때 마다 페이지 상태 초기화 진행하여 페이지네이션 구현',
          ],
        },
      ],
    };
  } else if (params.id === '2') {
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
        'https://github.com/sesac-ydp5-2nd-C/2nd-project-beatbay-front',
        'https://beatbay.online/',
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
      thumbnail: '/vinyl.webm',
      detail: [
        {
          img: [beatbay1],
          h: '거래 상품 등록 및 수정 페이지 제작',
          t: [
            '제목, 카테고리, 상품이미지, 가격, 설명, 상태, 거래방식, 지역 항목을 포함한 폼 제작',
            '게시글 수정 시에는 param으로 받아오는 상품 타입(물품/재능)과 상품id의 유무와 값에 따라 각 항목의 value값 조정',
          ],
        },
        {
          img: [beatbay2],
          h: '마이페이지 대시보드, 판매, 구매, 찜 페이지 구현',
          t: [
            '자신이 받은 후기와 팔로워, 팔로잉 목록을 모달로 조회 가능',
            '효율성 및 코드의 재사용성을 위해 모달, 메뉴 탭, 드롭 다운, 프로필(LP플레이어), 상품 카드 등은 별도의 컴포넌트로 관리',
            '판매, 구매, 찜 리스트 상품과 재능으로 탭으로 나누어 조회 가능',
            '드롭다운으로 판매중, 예약중, 판매완료를 나누어 조회 가능',
            '사이트의 재미요소를 더해주기 위해 ‘음악’ 컨셉에 맞추어 프로필 사진 LP판이 돌아가는 애니메이션 적용',
          ],
        },
        {
          img: [beatbay3],
          h: '자신 이외의 다른 유저 페이지(판매자 페이지) 제작',
          t: [
            '거래의 신뢰도를 높일 수 있도록 해당 유저가 받은 후기, 팔로워 모달 통해 확인 가능',
          ],
        },
        {
          img: [beatbay4],
          h: '공지사항, 칼럼 페이지 제작',
          t: [
            '관리자 이외의 사용자는 탭으로 나누어 공지사항, 칼럼 각각 조회 가능',
            '페이지 이동없이 한 번에 볼 수 있도록 애니메이션 통해 글 상세를 볼 수 있도록 구성',
          ],
        },
        {
          img: [beatbay5],
          h: '유저, 칼럼 및 공지, 게시글 관리가 가능한 관리자 페이지 제작',
          t: [
            '전체 유저 조회 및 등급 조정, 삭제 가능',
            '칼럼 및 공지 등록, 조회, 수정, 삭제 가능',
            '유저들이 등록한 물품/재능 게시글 삭제 가능',
          ],
        },
      ],
    };
  } else if (params.id === '3') {
    detailInfo = {
      id: 3,
      name: 'AH-WHEW',
      type: 'web',
      team: 'Team project',
      date: '2023. 12. 15 ~ 2023. 12. 29',
      overview: (
        <div>
          아휴는 유저가 쓰는 일기를 기반으로 AI 를 이용해 그림 일기를 그려주는
          웹 서비스입니다. 위 서비스에서 제공하는 핵심 기능은 총 5가지 입니다.
          <br />
          <br />
          1. AI가 사용자 입력한 텍스트의 감정 분석 수행 후 그림 출력 및 어울리는
          밈 추천
          <br />
          2. KAKAO API를 통해 AI가 생성한 그림 공유 가능
          <br />
          3. 감정 분석 결과에 대한 감정에 대한 성별/연령별 등의 통계 제공
          <br />
          4. 사용자의 감정 통계, 결과 캘린더 제공
          <br />
          5. 감정 분석 결과에 따른 사용자별 상품 추천
        </div>
      ),
      links: ['https://github.com/sessac-3rd-team-A/FE', 'http://ahwhew.shop/'],
      tools: 'HTML, CSS, TypeScript, Sass, React, Next.js, Figma, Git',
      role: (
        <div>
          • 사용자의 동작에따라 동적으로 변하는 일기 작성 페이지 <br />
          • 카카오톡 공유가 가능한 일기 결과 페이지 <br />
          • 에러 및 로딩 페이지 <br />• Figma를 활용한 UX, UI 디자인
        </div>
      ),
      thumbnail: '/diary.webm',
      detail: [
        {
          img: [ah1],
          h: '일기 작성 페이지',
          t: [
            '커스텀 프로퍼티(--startPoint)를 사용해 시작 위치를 요소에 따라 변수로 정의하여  위치값에 따라 시간차로 떨어지는 듯한 애니메이션 제작',
            '하나의 버튼 텍스트(‘START’, ‘OK’)에 따라 다른 동작을 수행하여 사용자 인터페이스의 동적인 변화 처리',
            'Token값을 확인해 로그인 유무에 따라 header값을 다르게 하여 API 요청',
          ],
        },
        {
          img: [ah2],
          h: '일기 결과 페이지',
          t: [
            '직접적으로 동적 연결된 url(result/[id]) 접근 가능을 위해 작성페이지에서 prop으로 가져오는 것이 아닌 따로 GET 요청 처리',
            '카카오톡 공유 API 사용 -> 동적으로 변하는 공유 이미지와 url을 User Argument로 설정',
            'Next.js의 이미지 최적화를 위해 Image태그를 사용해 webp로 변환',
            '프로젝트 톤에 맞는 커스텀 차트 구현을 위해 결과 값을 width값으로 설정',
          ],
        },
        {
          img: [ah3, ah4],
          h: '프로젝트 전반 로딩, 결과 페이지 제작',
          t: [],
        },
      ],
    };
  } else if (params.id === '4') {
    detailInfo = {
      id: 4,
      name: 'PORTFOLIO',
      type: 'web',
      team: 'Solo project',
      date: '2023. 11. 30 ~ 2023. 12. 10',
      overview: (
        <div>
          포트폴리오용으로 제작한 인터렉티브 웹 페이지입니다. 프론트엔드
          개발자로써의 역량을 드러냄과 동시에 노션에서 벗어나 보다 감각적이고
          편리한 포트폴리오를 제공하기 위해 제작하였습니다.
          <br />
          <br />
          1. 스크롤 및 커서를 활용한 인터렉티브 디자인
          <br />
          2. 이메일 API를 활용한 페이지에서 나에게 메일 발송 구현
          <br />
          3. 버셀을 이용한 정적 배포
        </div>
      ),
      links: ['https://github.com/jjsh03/portfolio'],
      tools: 'HTML, CSS, JavaScript, Sass, React, AOS, Figma, Git',
      thumbnail: '/water.webm',
      detail: [
        {
          img: [pf1, pf2, pf3],
          h: '감각적인 사용자 경험을 위한 인터랙티브 효과',
          t: [
            '커서의 이동, 클릭에 따른 파동 효과',
            '풀페이지 스크롤을 통한 손쉬운 섹션 이동 → 모바일 상,하단바를 반영한 100vh설정이 따로 필요해 css property를 조작해서 제어',
            '마우스가 움직일때 마다 x,y좌표값을 얻어 커서를 따라다니는 썸네일 제작',
          ],
        },
        {
          img: [pf4],
          h: '페이지 이동 없이 이메일 발송',
          t: ['emailJS를 사용하여 포트폴리오 사이트 내에서 바로 컨택이 가능'],
        },
      ],
    };
  }

  const backToTOP = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      beatbay1,
      beatbay2,
      beatbay3,
      beatbay4,
      beatbay5,
      mealsac1,
      mealsac2,
      mealsac3,
      mealsac4,
      mealsac5,
      mealsac6,
      pf1,
      pf2,
      pf3,
      pf4,
    ];

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
  }, [params.id]);

  return (
    <div className="container detailContainer">
      {loading && (
        <div className="loading">
          <h2>Loading</h2>
          <HashLoader color="#4cafa9" size={100} />
        </div>
      )}
      {!loading && (
        <>
          <video autoPlay loop muted playsInline className="backVideo">
            <source src={detailInfo.thumbnail} type="video/webm" />
          </video>
          <div className="backPath">
            <NavLink to={'/work'}>
              <img src={back} alt="back" className="backArrow" />
            </NavLink>
            <section className="detailTitle">
              <img src={detailIcon} alt="icon" className="detailIcon" />
              <h1>{detailInfo.name}</h1>
              <p>{detailInfo.type}</p>
            </section>
            <main className="moreInfoSection">
              <div>
                <h1>{detailInfo.name}</h1>
                <p>{detailInfo.team}</p>
              </div>
              <div>
                <div className="workInfo">
                  <div>
                    <div className="overview">
                      <p className="infoName">OVERVIEW</p>
                      <div>{detailInfo.overview}</div>
                    </div>
                    <div className="date">
                      <p className="infoName">DATE</p>
                      <div>{detailInfo.date}</div>
                    </div>
                    {detailInfo.links && detailInfo.links.length > 0 && (
                      <div className="Links">
                        <p className="infoName">LINKS</p>
                        <div>
                          {detailInfo.links.length > 1 && (
                            <a
                              href={detailInfo.links[1]}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p>배포</p>
                            </a>
                          )}
                          <a
                            href={detailInfo.links[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>코드</p>
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="tools">
                      <p className="infoName">TOOLS</p>
                      <div>{detailInfo.tools}</div>
                    </div>
                    {detailInfo.role && (
                      <div className="role">
                        <p className="infoName">ROLE</p>
                        <div>{detailInfo.role}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="workGif">
                  <img src={imac} alt="imac" className="imac" />
                  <div className={`imacGif ${detailInfo.name}gif`} />
                </div>
              </div>
            </main>
          </div>
          <div className="eclipse" />
          <div className="moreDetail">
            <h1>DETAIL</h1>
            {detailInfo.detail &&
              detailInfo.detail.length > 0 &&
              detailInfo.detail.map((detailItem, index) => (
                <MoreDetail key={index} data={detailItem} />
              ))}
          </div>
          <footer>
            <p onClick={backToTOP}>Back to top ⇧</p>
          </footer>
        </>
      )}
    </div>
  );
}
