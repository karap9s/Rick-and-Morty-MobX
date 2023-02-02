import React from 'react';
import { Link } from 'react-router-dom';
import ICards from '../../Types/MainTypes';
import './Card.css';

const Card: React.FC<ICards> = (props: ICards) => {
  return (
    <div className="card">
      <img className="image" src={props.image} alt={props.name} />
      <h1 className="name">{props.name}</h1>
      <h3 className="species">Species: {props.species}</h3>
      <h3 className="gender">Gender: {props.gender}</h3>
      <h3 className="status">Status: {props.status}</h3>
      <Link className="card_link" to="/info">
        <button className="more">About</button>
      </Link>
    </div>
  );
};

export default Card;
