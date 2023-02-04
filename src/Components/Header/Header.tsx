import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { mainStore } from '../../Store/MainStore';
import { observer } from 'mobx-react-lite';

const Header: React.FC = observer(() => {
  const { currentCharacter, active } = mainStore;
  const { setActive } = mainStore;

  return (
    <header className="header_wrapper">
      <div className="link_wrapper">
        <Link
          onClick={() => setActive('home')}
          className={`link ${active === 'home' && 'header_active'}`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setActive('form')}
          className={`link ${active === 'form' && 'header_active'}`}
          to="/form"
        >
          Form
        </Link>
        <Link
          onClick={() => setActive('about')}
          className={`link ${active === 'about' && 'header_active'}`}
          to="/about"
        >
          About
        </Link>
      </div>
      {currentCharacter && (
        <div className="position_wrapper">
          <p className="position">{currentCharacter}</p>
        </div>
      )}
    </header>
  );
});

export default Header;
