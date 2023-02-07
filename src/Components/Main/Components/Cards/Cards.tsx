import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import './Cards.css';
import { mainStore } from '../../../../Store/MainStore';
import ICards from '../../../../Types/MainTypes';
import Card from '../../../../ComponentsUtils/Card/Card';
import { Loader } from '../../../../ComponentsUtils/Loader/Loader';
import NoneCards from '../../../../ComponentsUtils/NoneCards/NoneCards';

const Cards: React.FC = observer(() => {
  const { cardsArray, gender, status, name, type, isCardsLoading } = mainStore;
  const { setCardsArray, switchCardsLoading } = mainStore;

  useEffect(() => {
    switchCardsLoading();
    setCardsArray();
    switchCardsLoading();
  }, [gender, status, name, type]);

  return (
    <div className="main_cards_wrapper">
      {isCardsLoading ? (
        <Loader />
      ) : cardsArray === undefined ? (
        <NoneCards />
      ) : (
        <div className="cards_wrapper">
        {cardsArray?.map((card: ICards) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
      )}
    </div>
  );
});

export default Cards;
