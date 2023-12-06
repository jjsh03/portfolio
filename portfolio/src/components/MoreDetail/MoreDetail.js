import React from 'react';
import './style.scss';

export default function MoreDetail({ data }) {
  return (
    <div className="moreDetailCard">
      <figure>
        {data.img &&
          data.img.length > 0 &&
          data.img.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="moreDetailImg"
              className="moreDetailImg"
            />
          ))}
      </figure>
      <h3>{data.h}</h3>
      {data.t &&
        data.t.length > 0 &&
        data.t.map((context, index) => <p key={index}>• {context}</p>)}
    </div>
  );
}
