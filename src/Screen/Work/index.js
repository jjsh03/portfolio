import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';
import WorkMenu from '../../components/WorkMenu/WorkMenu';
import home from '../../asset/home.png';
import WebCompo from '../../components/WorkComponent/WebCompo';
import DesignCompo from '../../components/WorkComponent/DesignCompo';
import OthersCompo from '../../components/WorkComponent/OthersCompo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function WorkWeb() {
  const location = useLocation();

  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`
    );
  };

  window.addEventListener('resize', setVh);
  setVh();

  const [selectedMenu, setSelectedMenu] = useState('');

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      const selectedMenuFromLocation = location.state || 'web';
      console.log(`Selected Menu: ${selectedMenuFromLocation}`);
      setSelectedMenu(selectedMenuFromLocation);
      console.log(selectedMenu);
    }
  }, [location]);
  console.log(selectedMenu);

  return (
    <div className="container workContainer">
      <div className="homeBar">
        <NavLink to="/">
          <img src={home} alt="home" className="home" />
        </NavLink>
      </div>
      <WorkMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {selectedMenu === 'web' && <WebCompo />}
      {selectedMenu === 'design' && <DesignCompo />}
      {selectedMenu === 'others' && <OthersCompo />}
    </div>
  );
}
