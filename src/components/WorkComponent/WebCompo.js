import React from "react";
import "./WebCompoStyle.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WebCompo() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      document.documentElement.style.setProperty(
        "--mouseX",
        `${mouseX - 20}px`
      );
      document.documentElement.style.setProperty(
        "--mouseY",
        `${mouseY - 20}px`
      );
    };

    const webLists = document.querySelectorAll(".webList");
    webLists.forEach((webList) => {
      webList.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      webLists.forEach((webList) => {
        webList.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const navigate = useNavigate();
  const goToDetail = (e) => {
    navigate(`/work/${e}`);
  };

  return (
    <section className="section webSection">
      <div className="webList" onClick={() => goToDetail(1)}>
        <h1>01</h1>
        <h1>MEALSAC</h1>
        <p className="listTeam">teamproject</p>
        <p>
          새싹 영등포 캠퍼스 주변 및 문래동 식당 큐레이팅 및 커뮤니티 웹서비스
          <br />
          HTML, CSS, Javascript, BootStrap, EJS, axios, AOS, Figma, Git
        </p>
      </div>

      <div className="webList" onClick={() => goToDetail(2)}>
        <h1>02</h1>
        <h1>BEATBAY</h1>
        <p className="listTeam">teamproject</p>
        <p>
          음악 관련 중고 거래와 재능 마켓을 접목한 음악 거래 웹 서비스 <br />
          HTML, CSS, JavaScript, Sass, React, Axios, AOS, Figma, Git{" "}
        </p>
      </div>
      <div className="webList" onClick={() => goToDetail(3)}>
        <h1>03</h1>
        <h1>SOMETHING</h1>
        <p className="listTeam">teamproject</p>
        <p>
          세번째 팀플,, <br />
          HTML, CSS, Javascript, ...
        </p>
      </div>
      <div className="webList" onClick={() => goToDetail(4)}>
        <h1>04</h1>
        <h1>PORTFOLIO</h1>
        <p className="listTeam">soloproject</p>
        <p>
          개인 포트폴리오 사이트(현재 사이트) <br />
          HTML, CSS, JavaScript, Sass, React, AOS, Figma, Git{" "}
        </p>
      </div>
    </section>
  );
}
