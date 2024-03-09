import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Go() {
  const [imgg, setImg] = useState('');

  const navigate = useNavigate('');
  useEffect(() => {
    if (imgg === '') {
      setImg('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/3_number_black_and_white.svg/1173px-3_number_black_and_white.svg.png?20150107095747');
    }
    if (imgg === 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/3_number_black_and_white.svg/1173px-3_number_black_and_white.svg.png?20150107095747') {
      setTimeout(() => {
        setImg('https://avatars.mds.yandex.net/i?id=18bea88813294fbd53f34cb96124fb2a-5449757-images-thumbs&n=13');
      }, 1000);
    }

    if (imgg === 'https://avatars.mds.yandex.net/i?id=18bea88813294fbd53f34cb96124fb2a-5449757-images-thumbs&n=13') {
      setTimeout(() => {
        setImg('https://avatars.mds.yandex.net/i?id=f34dcb74b65792dab2eefb8254bf0852-4450965-images-thumbs&n=13');
      }, 1000);
    }

    if (imgg === 'https://avatars.mds.yandex.net/i?id=f34dcb74b65792dab2eefb8254bf0852-4450965-images-thumbs&n=13') {
      setTimeout(() => {
        setImg('https://avatars.mds.yandex.net/i?id=ee130a62fffbfc2a2ea287c087898280-4566264-images-thumbs&n=13');
      }, 1000);
    }
    if (imgg === 'https://avatars.mds.yandex.net/i?id=ee130a62fffbfc2a2ea287c087898280-4566264-images-thumbs&n=13') {
      setTimeout(() => {
        setImg('1');
        navigate('/photo');
      }, 1000);
    }
  });
  return (
    <div className="go-body">
      <section className="main-section">
        <img src={imgg} alt="1" className="img-go" />
      </section>
    </div>
  );
}
