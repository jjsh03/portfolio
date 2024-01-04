import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
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
      // navigate({ ...location, state: null });
    } else {
      setSelectedMenu('web');
    }
  }, [location, navigate]);
  console.log(selectedMenu);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const btnDeco = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='70%'
      viewBox='0 0 16 19'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 8.98691C4.61497 10.2128 7.9912 14.1207 7.99998 18.7545C8.00876 14.1207 11.385 10.2128 16 8.98691C11.6591 7.83381 8.41414 4.30779 8.03673 0.0367652L7.99996 0L7.96323 0.036728C7.58583 4.30777 4.3409 7.8338 0 8.98691Z'
        fill='#4CAFA9'
      />
    </svg>
  );

  return (
    <div className='container workContainer'>
      <div className='homeBar'>
        <button
          className={`webMenuMobile ${selectedMenu === 'web' ? 'clicked' : ''}`}
          onClick={() => handleMenuClick('web')}
        >
          web{btnDeco}
        </button>
        <button
          className={`designMenuMobile ${
            selectedMenu === 'design' ? 'clicked' : ''
          }`}
          onClick={() => handleMenuClick('design')}
        >
          design{btnDeco}
        </button>
        <button
          className={`othersMenuMobile ${
            selectedMenu === 'others' ? 'clicked' : ''
          }`}
          onClick={() => handleMenuClick('others')}
        >
          others{btnDeco}
        </button>
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
