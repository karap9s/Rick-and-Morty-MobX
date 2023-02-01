import React from 'react';
import { Link } from 'react-router-dom';
import ICards from '../../Types/CardTypes';
import './Card.css';

const Card: React.FC = (props: ICards) => {
  return (
    <div className="card" key={props.id}>
      <img className="image" src={props.image} alt={props.name} />
      <h1 className="name">{props.name}</h1>
      <h3 className="species">Species: {props.species}</h3>
      <h3 className="gender">Gender: {props.gender}</h3>
      <h3 className="status">Status: {props.status}</h3>
      <Link
        // onClick={() => {
        //   dispatch(
        //     setCard({
        //       id: card.id,
        //       name: card.name,
        //       status: card.status,
        //       species: card.species,
        //       type: card.type,
        //       gender: card.gender,
        //       origin: {
        //         name: card.origin.name,
        //         url: card.origin.url,
        //       },
        //       location: {
        //         name: card.location.name,
        //         url: card.location.url,
        //       },
        //       image: card.image,
        //       episode: card.episode,
        //       url: card.url,
        //       creater: card.creater,
        //       isOpen: true,
        //     })
        //   );
        //   dispatch(setCurrentCharacter(card.name));
        //   scrollToTop();
        // }}
        className="card_link"
        to="/info"
      >
        <button className="more">About</button>
      </Link>
    </div>
  );
};

export default Card;
