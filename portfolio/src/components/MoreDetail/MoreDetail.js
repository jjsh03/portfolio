import React from 'react';
import './style.scss';

export default function MoreDetail({ data }) {
  console.log(data);

  return (
    <div className="moreDetailCard">
      <img src={data.img} alt="moreDetailImg" className="moreDetailImg" />
      <h3>{data.h}</h3>
      {data.t &&
        data.t.length > 0 &&
        data.t.map((context, index) => <p key={index}>• {context}</p>)}
    </div>
  );
}
