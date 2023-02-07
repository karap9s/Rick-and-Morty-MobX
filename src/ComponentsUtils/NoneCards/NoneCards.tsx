import React from 'react';
import './NoneCards.css';

const NoneCards: React.FC = () => {
  return (
    <div className="none_cards_wrapper">
      <h2 className="none_cards_request">There is no cards for your request</h2>
    </div>
  );
};

export default NoneCards;
