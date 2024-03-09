import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GetWeather from './GetWeather';
import Go from './Go';
import MainList from './MainList';
import GetPhoto from './GetPhoto';
import Menu from './Menu';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainList />} />
      <Route path="/go" element={<Go />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/weather" element={<GetWeather />} />
      <Route path="/photo" element={<GetPhoto />} />
    </Routes>
  );
}
