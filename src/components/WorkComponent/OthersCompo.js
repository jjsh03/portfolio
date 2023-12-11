import React, { useEffect, useState } from 'react';
import './OthersCompoStyle.scss';
import OthersFolder from '../OthersFolder/OthersFolder';
import other1 from '../../asset/others1.png';
import other2 from '../../asset/others2.png';
import other3 from '../../asset/others3.png';
import other4 from '../../asset/others4.jpg';
import other5 from '../../asset/others5.jpg';
import { HashLoader } from 'react-spinners';

export default function OthersCompo() {
  const otherWorks = [
    {
      id: 1,
      name: 'KMILK',
      year: 2022,
      type: 'POPUP STORE',
      img: other1,
      url: 'https://sage-h.notion.site/_-ac404ad9611342c09f2adbcbd0a50191',
    },
    {
      id: 2,
      name: 'LOCA',
      year: 2021,
      type: 'VIDEO',
      img: other2,
      url: 'https://youtu.be/23kFUYgp20c',
    },
    {
      id: 3,
      name: '칠성제로',
      year: 2021,
      type: 'IMCPLAN',
      img: other3,
      url: 'https://sage-h.notion.site/_IMC-c7b52b5e92574ea0a2e5ddb0c73d0a75',
    },
    {
      id: 4,
      name: '공차',
      year: 2022,
      type: 'IMCPLAN',
      img: other4,
      url: 'https://sage-h.notion.site/IMC-2c073a849cde473798999099d6add7e6',
    },
    {
      id: 5,
      name: '파크랜드',
      year: 2021,
      type: 'IMCPLAN',
      img: other5,
      url: 'https://sage-h.notion.site/_-981b3236a8a8432ab8b5f5263bc49fa3',
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = otherWorks.map(({ img }) => {
      const image = new Image();
      image.src = img;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section className="section othersSection">
      {loading && (
        <div className="loading">
          <h2>Loading</h2>
          <HashLoader color="#4cafa9" size={100} />
        </div>
      )}
      {!loading && (
        <>
          {otherWorks.map((otherWork) => (
            <OthersFolder key={otherWork.id} data={otherWork} />
          ))}
        </>
      )}
    </section>
  );
}
