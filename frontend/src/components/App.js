import React from 'react';
import {Header} from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <input placeholder="買った食材を入力"/>
      <div>
        <h2>冷蔵庫</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
};
