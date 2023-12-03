import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './style.scss';
import WorkMenu from '../../components/WorkMenu/WorkMenu';
import home from '../../asset/home.png';
import WebCompo from '../../components/WorkComponent/WebCompo';
import DesignCompo from '../../components/WorkComponent/DesignCompo';
import OthersCompo from '../../components/WorkComponent/othersCompo';

export default function WorkWeb() {
  const navigate = useNavigate();
  const location = useLocation();

  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };

  window.addEventListener('resize', setVh);
  setVh();

  useEffect(() => {
    const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      document.documentElement.style.setProperty(
        '--mouseX',
        `${mouseX - 20}px`,
      );
      document.documentElement.style.setProperty(
        '--mouseY',
        `${mouseY - 20}px`,
      );
    };

    const webLists = document.querySelectorAll('.webList');
    webLists.forEach(webList => {
      webList.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      webLists.forEach(webList => {
        webList.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  const [selectedMenu, setSelectedMenu] = useState('web');

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      const selectedMenuFromLocation = location.state || 'web';
      console.log(`Selected Menu: ${selectedMenuFromLocation}`);
      setSelectedMenu(selectedMenuFromLocation);
      console.log(selectedMenu);
    }
  }, [location]);

  return (
    <div className='container workContainer'>
      <div className='homeBar'>
        <NavLink to='/'>
          <img src={home} alt='home' className='home' />
        </NavLink>
      </div>
      <WorkMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {selectedMenu === 'web' && <WebCompo />}
      {selectedMenu === 'design' && <DesignCompo />}
      {selectedMenu === 'others' && <OthersCompo />}
    </div>
  );
}
