import React from 'react';
import './style.scss';

export default function OthersFolder({ data }) {
  return (
    <div>
      <div className={`otherFolder ${data.name}`}>
        <div className={`folderBack ${data.name}`}>
          <div />
          <div />
        </div>
        <img src={data.img} alt="thumbnail" className="folderThumbnail"></img>
        <div className={`folderFront ${data.name}front`}>
          {/* <p>
            {data.name}_{data.year}
          </p>
          <p>{data.type}</p> */}
        </div>
      </div>
      <div className="folderInfo">
        {' '}
        <p>
          {data.name}_{data.year}
        </p>
        <p>{data.type}</p>
      </div>
    </div>
  );
}
