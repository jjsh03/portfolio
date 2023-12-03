import React from 'react';
import './style.scss';

export default function DesignCard({ data }) {
  console.log(data);
  return (
    <div className='designCard'>
      <div>
        <div className='cardHover'>
          <p>{data.type}</p>
        </div>
        <img src={data.img} alt='cardImg' className='cardImg' />
      </div>
      <div className='cardText'>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  );
}
