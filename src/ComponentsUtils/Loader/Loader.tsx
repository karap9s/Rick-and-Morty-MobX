import React from 'react';
import './Loader.css';
import Morty from '../../assets/img/Morty_Smith.png';

export const Loader: React.FC = () => {
  return (
    <div className="loader_wrapper">
      <img src={Morty} alt="Morty Loader" />
      <div className="text_wrapper">
        <h2 className="loading">Loading</h2>
        <div className="lds_ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
