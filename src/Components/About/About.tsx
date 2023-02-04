import React from 'react';
import './About.css';
import Daniil from '../../assets/img/Daniil.jpg';

const About: React.FC = () => {
  return (
    <div className="about_wrapper">
      <div className="about_card">
        <img className="image" src={Daniil} alt="Rick" />
        <h1 className="name">Daniil Sharenkov</h1>
        <h3 className="species">Species: Human</h3>
        <h3 className="gender">Gender: Male</h3>
        <h3 className="status">Status: Alive</h3>
        <button className="about_more">Show More</button>
      </div>
    </div>
  );
};

export default About;
