import React, { useEffect, useState } from 'react';

export default function GetWeather() {
  const API_KEY = 'XRT3hVV4fBEjGWd9lbVvylVzX2Na6YVVQ8dhZhdU';
  //   const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
  const [data, setData] = useState({});
  //   https:// api.nasa.gov/insight_weather/?api_key=XRT3hVV4fBEjGWd9lbVvylVzX2Na6YVVQ8dhZhdU&feedtype=json&ver=1.0
  useEffect(() => {
    fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=string&ver=1.0`)
      .then((res) => res)
      .then((result) => setData(result));
  }, []);
  console.log(data);
  //   function getWeather() {
  //     return fetch(API_URL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const {
  //           sol_keys,
  //           validity_checks,
  //           ...solData
  //         } = data;
  //         return Object.entries(solData).map(([sol, data]) => ({
  //           sol,
  //           maxTemp: data.AT.mx,
  //           minTemp: data.AT.mn,
  //           windSpeed: data.HWS.av,
  //           windDirectionDegrees: data.WD.most_common.compass_degrees,
  //           windDirectionCardinal: data.WD.most_common.compass_point,
  //           date: new Date(data.First_UTC),
  //         }));
  //       });
  //   }
  //   getWeather();
  return (
    <div>GetWeather</div>
  );
}
