import React from 'react';
import './OthersCompoStyle.scss';
import OthersFolder from '../OthersFolder/OthersFolder';
import other1 from '../../asset/others1.png';
import other2 from '../../asset/others2.png';
import other3 from '../../asset/others3.png';

export default function OthersCompo() {
  const otherWorks = [
    {
      id: 1,
      name: 'KMILK',
      year: 2022,
      type: 'POPUP STORE',
      img: other1,
    },
    {
      id: 2,
      name: 'LOCA',
      year: 2021,
      type: 'VIDEO',
      img: other2,
    },
    {
      id: 3,
      name: '칠성제로',
      year: 2022,
      type: 'IMCPLAN',
      img: other3,
    },
    {
      id: 4,
      name: 'KMILK',
      year: 2022,
      type: 'POPUP STORE',
      img: other1,
    },
    {
      id: 5,
      name: 'LOCA',
      year: 2021,
      type: 'VIDEO',
      img: other2,
    },
    {
      id: 6,
      name: '칠성제로',
      year: 2022,
      type: 'IMCPLAN',
      img: other3,
    },
  ];
  return (
    <section className="section othersSection">
      {otherWorks.map((otherWork) => (
        <OthersFolder key={otherWork.id} data={otherWork} />
      ))}
    </section>
  );
}
