import React from 'react';
import { Link } from 'react-router-dom';

export default function MainList() {
  return (
    <div className="main-body">
    <div className="main-section">
      <h1 className='main-title'>History-Of-Mars</h1>
      <button className='btn' type="button"><Link className="main-link" to="/go">Запуск</Link></button>
    </div>
    </div>
  );
}
