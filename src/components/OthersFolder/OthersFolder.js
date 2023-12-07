import React from 'react';
import './style.scss';

export default function OthersFolder({ data }) {
  return (
    <div>
      <a href={data.url} target='blank' style={{ color: 'white' }}>
        <div className={`otherFolder ${data.name}`}>
          <div className={`folderBack ${data.name}`}>
            <div />
            <div />
          </div>
          <img src={data.img} alt='thumbnail' className='folderThumbnail'></img>
          <div className={`folderFront ${data.name}front`}></div>
        </div>
        <div className='folderInfo'>
          {' '}
          <p>
            {data.name}_{data.year}
          </p>
          <p>{data.type}</p>
        </div>
      </a>
    </div>
  );
}
