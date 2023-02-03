import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import './Cards.css';
import { mainStore } from '../../../../Store/MainStore';
import ICards from '../../../../Types/MainTypes';
import Card from '../../../../ComponentsUtils/Card/Card';

const Cards: React.FC = observer(() => {
  const { cards, gender, status, name, type } = mainStore;
  const { setCards } = mainStore;

  useEffect(() => {
    setCards();
  }, [gender, status, name, type]);

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
