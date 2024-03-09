import React, { useEffect, useState } from 'react';

export default function GetPhoto() {
  const [mars, setmars] = useState([]);
  const [rover, setRover] = useState('curiosity');
  const [day, setDay] = useState('2015-6-3');
  const [flag, setFlag] = useState(false);
  const key = 'XRT3hVV4fBEjGWd9lbVvylVzX2Na6YVVQ8dhZhdU';

  const inputHandlerDay = (e) => {
    setDay(e.target.value);
  };
  const inputHandlerRover = (e) => {
    setRover(e.target.value);
  };
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${day}&api_key=${key}`)
      .then((res) => res.json())
      .then((data) => setmars(data.photos));
  }, [rover, day]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFlag(true);
  };
  console.log(mars);
  return (
    <section className="section-photo">
      <h1 className="section-photo-tytle">Получаем фото с марса</h1>
      <div>
        <form className="form" method="post" onSubmit={submitHandler}>
          <div className="mb-3">
            <input type="text" className="form-control" name="day" onChange={inputHandlerDay} value={day} />
            <div id="emailHelp" className="form-text">Выберите дату</div>
          </div>
          <select onChange={inputHandlerRover} name="form-select" defaultValue="DEFAULT" className="form-select" aria-label="Пример выбора по умолчанию">
            <option name="rover" value="DEFAULT" disabled>Выберите марсоход:</option>
            <option name="rover" value="Curiosity">Curiosity</option>
            <option name="rover" value="Opportunity">Opportunity</option>
            <option name="rover" value="Spirit">Spirit</option>
          </select>
          <div>
            <button type="submit" className="btn-1 btn-secondary btn-lg">Получить фотографии</button>
          </div>
        </form>
      </div>
      {!flag
        ? (
          <div />
        ) : (
          <div className="photo-conteyner">
            {
            mars?.map((el) => (
              <div className="box">
                <h1>
                  Марсоход
                  {' '}
                  {el.rover.name}
                </h1>
                <p>
                  {el.sol}
                  {' '}
                  день экспедиции, начиная с
                  {' '}
                  {el.rover.landing_date}
                </p>
                <p>
                  {' '}
                  Камера:
                  {' '}
                  {el.camera.full_name}
                </p>
                <img src={el.img_src} alt="" className='box-img' />
              </div>
            ))
        }
          </div>
        )}

    </section>
  );
}
