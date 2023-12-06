import React from 'react';
import './style.scss';
import { useParams } from 'react-router';
import detailIcon from '../../asset/detailIcon.svg';
import imac from '../../asset/imac.png';
import MoreDetail from '../../components/MoreDetail/MoreDetail';

export default function WorkDetail() {
  let params = useParams();
  let detailInfo;
  if (params.id == 1) {
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
      links: [
        'https://github.com/sesac-project-E/mealsac',
        'http://ec2-54-146-187-238.compute-1.amazonaws.com:8080/',
      ],
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
      thumbnail: '/meal.mp4',
    };
  } else if (params.id == 2) {
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
      thumbnail: '/vinyl.mp4',
      detail: [
        {
          img: 'https://file.notion.so/f/f/2eb25131-fd95-4f1f-85a6-eeaf02311dec/f3074320-fbb3-474c-b6d9-835f7b562967/Animation6.gif?id=10c6b494-bf4f-4beb-bf92-d3d621b5d6d2&table=block&spaceId=2eb25131-fd95-4f1f-85a6-eeaf02311dec&expirationTimestamp=1701928800000&signature=-grnUECOXR9806bfvpXkQQEcIgydo9wo2Zre3JOzU8g',
          h: '거래 상품 등록 및 수정 페이지 제작',
          t: [
            '제목, 카테고리, 상품이미지, 가격, 설명, 상태, 거래방식, 지역 항목을 포함한 폼 제작',
            '게시글 수정 시에는 param으로 받아오는 상품 타입(물품/재능)과 상품id의 유무와 값에 따라 각 항목의 value값 조정',
          ],
        },
        {
          img: 'https://file.notion.so/f/f/2eb25131-fd95-4f1f-85a6-eeaf02311dec/9cc1402d-2235-416f-a286-2ff98de0f1c4/Animation3.gif?id=6b1fbed2-2927-4240-b67a-194b55542629&table=block&spaceId=2eb25131-fd95-4f1f-85a6-eeaf02311dec&expirationTimestamp=1701928800000&signature=IlPKbypedwaqYWPLLdFufLqYhw5ao3luE8Y-qR0bjd4',
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
          img: 'https://file.notion.so/f/f/2eb25131-fd95-4f1f-85a6-eeaf02311dec/66271ff5-cd62-45d0-a583-4600dfe7ed97/Animation4.gif?id=3ea50c94-1246-4764-aad8-3461156ae62d&table=block&spaceId=2eb25131-fd95-4f1f-85a6-eeaf02311dec&expirationTimestamp=1701928800000&signature=NjUeJgmUQMyS7fxFphDs1nrzFRI0LoS0_UIhbuaqUP0',
          h: '자신 이외의 다른 유저 페이지(판매자 페이지) 제작',
          t: [
            '거래의 신뢰도를 높일 수 있도록 해당 유저가 받은 후기, 팔로워 모달 통해 확인 가능',
          ],
        },
        {
          img: 'https://file.notion.so/f/f/2eb25131-fd95-4f1f-85a6-eeaf02311dec/5b0c9e8d-90bc-459a-a345-677eecaa3160/Animation2.gif?id=05719e79-addb-4e2a-b7ee-6887e70635a6&table=block&spaceId=2eb25131-fd95-4f1f-85a6-eeaf02311dec&expirationTimestamp=1701928800000&signature=hq0AeT3fI6d5Hk7XuiJEM89oNea49pcePerdeG7MKLs',
          h: '공지사항, 칼럼 페이지 제작',
          t: [
            '관리자 이외의 사용자는 탭으로 나누어 공지사항, 칼럼 각각 조회 가능',
            '페이지 이동없이 한 번에 볼 수 있도록 애니메이션 통해 글 상세를 볼 수 있도록 구성',
          ],
        },
        {
          img: 'https://file.notion.so/f/f/2eb25131-fd95-4f1f-85a6-eeaf02311dec/df8f95f3-3dee-42ed-ab9e-193766bf3b82/Animation5.gif?id=72f8516d-ddf8-4553-bd7d-34768de7aba1&table=block&spaceId=2eb25131-fd95-4f1f-85a6-eeaf02311dec&expirationTimestamp=1701928800000&signature=xQegzZMkL65ZI_BezRtmPUnL-GKzEDcfYaCz_geGqok',
          h: '유저, 칼럼 및 공지, 게시글 관리가 가능한 관리자 페이지 제작',
          t: [
            '전체 유저 조회 및 등급 조정, 삭제 가능',
            '칼럼 및 공지 등록, 조회, 수정, 삭제 가능',
            '유저들이 등록한 물품/재능 게시글 삭제 가능',
          ],
        },
      ],
    };
  } else if (params.id == 3) {
    detailInfo = {
      id: 3,
      name: 'SOMETHING',
      type: 'web',
      team: 'Team project',
      date: '2023. 12. 11 ~ 2023. 12. 27',
      overview: (
        <div>
          뭐라구,,,뭐라구,,,
          <br />
          <br />
          1. ㄴㄴㄴ
          <br />
          2. ㅁㅁㅁ
          <br />
          3. ㄷㄷㄷ
          <br />
          4. ㅠㅠㅠ
        </div>
      ),
      links: [],
      tools: 'HTML, CSS, JavaScript, Sass, React, Axios, AOS, Figma, Git',
      role: <div>• 어쩌고,,</div>,
      thumbnail: '/vinyl.mp4',
    };
  } else if (params.id == 4) {
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
          3. SEO
        </div>
      ),
      links: ['https://github.com/jjsh03/portfolio'],
      tools: 'HTML, CSS, JavaScript, Sass, React, Axios, AOS, Figma, Git',
      thumbnail: '/water.mp4',
    };
  }
  console.log(detailInfo);
  return (
    <div className="container detailContainer">
      <video autoPlay loop muted playsInline className="backVideo">
        <source src={detailInfo.thumbnail} type="video/mp4" />
      </video>
      <div className="backPath">
        <section className="detailTitle">
          <img src={detailIcon} alt="icon" className="detailIcon" />
          <h1>{detailInfo.name}</h1>
          <p>{detailInfo.type}</p>
        </section>
        <section className="moreInfoSection">
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
        </section>
      </div>
      <div className="moreDetail">
        <h1>DETAIL</h1>
        {detailInfo.detail &&
          detailInfo.detail.length > 0 &&
          detailInfo.detail.map((detailItem, index) => (
            <MoreDetail key={index} data={detailItem} />
          ))}
      </div>
    </div>
  );
}
