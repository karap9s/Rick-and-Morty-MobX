import React from 'react';
import { IFormCards } from '../../Types/FormTypes';
import './Form.css';

const FormCards: React.FC<IFormCards> = (props: IFormCards) => {
  return (
    <div className="form_cards">
      <div className="form_cards_avatar">
        <h2 className="form_cards_avatar_heading">Avatar</h2>
        <span className="form_cards_avatar_text">
          <b className="form_cards_avatar_bold">{props.avatar}</b>
        </span>
      </div>
      <div className="form_cards_name">
        <h2 className="form_cards_name_heading">Name</h2>
        <span className="form_cards_name_text">
          <b>{props.name}</b>
        </span>
      </div>
      <div className="form_cards_surname">
        <h2 className="form_cards_surname_heading">Surname</h2>
        <span className="form_cards_surname_text">
          <b>{props.surname}</b>
        </span>
      </div>
      <div className="form_cards_birth">
        <h2 className="form_cards_birth_heading">Birth</h2>
        <span className="form_cards_birth_text">
          <b>{props.birthDate}</b>
        </span>
      </div>
      <div className="form_cards_country">
        <h2 className="form_cards_country_heading">Country</h2>
        <span className="form_cards_country_text">
          <b>{props.country}</b>
        </span>
      </div>
    </div>
  );
};

export default FormCards;
