import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { mainStore } from '../../Store/MainStore';
import ICards from '../../Types/MainTypes';
import './Card.css';

const Card: React.FC<ICards> = observer((props: ICards) => {
  const { setCard, setCurrentCharacter } = mainStore;

  return (
    <div className="card">
      <img className="image" src={props.image} alt={props.name} />
      <h1 className="name">{props.name}</h1>
      <h3 className="species">Species: {props.species}</h3>
      <h3 className="gender">Gender: {props.gender}</h3>
      <h3 className="status">Status: {props.status}</h3>
      <Link onClick={() => {
        setCard({
          id: props.id,
          name: props.name,
          status: props.status,
          species: props.species,
          type: props.type,
          gender: props.gender,
          origin: {
            name: props.origin.name,
            url: props.origin.url,
          },
          location: {
            name: props.location.name,
            url: props.location.url,
          },
          image: props.image,
          episode: props.episode,
          url: props.url,
          creater: props.creater,
          isOpen: true,
        });
        setCurrentCharacter(props.name);
      }} className="card_link" to="/info">
        <button className="more">About</button>
      </Link>
    </div>
  );
});

export default Card;
