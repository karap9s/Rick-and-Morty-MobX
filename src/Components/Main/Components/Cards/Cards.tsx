import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { getFilterCharacters } from '../../../../API/MainAPI';
import './Cards.css';
import { mainStore } from '../../../../Store/MainStore';
import ICards from '../../../../Types/MainTypes';
import Card from '../../../../ComponentsUtils/Card/Card';

const Cards: React.FC = observer(() => {
  const { cards } = mainStore;
  const { setCards } = mainStore;

  useEffect(() => {
    setCards();
  }, []);

  return (
    <div className="wrapper">
      <div className="cards_wrapper">
        {cards?.map((card: ICards) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
});

export default Cards;
