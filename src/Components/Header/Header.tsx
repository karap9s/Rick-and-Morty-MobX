import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { MainContext } from 'components/context/context';

const Header: React.FC = () => {
  // const { currentCharacter, active, setActive } = useContext(MainContext);

  return (
    <header className="wrapper">
      <div className="link_wrapper">
        <Link
          // onClick={() => setActive('home')}
          className="link"
          to="/"
        >
          Home
        </Link>
        <Link
          // onClick={() => setActive('form')}
          className="link"
          to="/form"
        >
          Form
        </Link>
        <Link
          // onClick={() => setActive('about')}
          className="link"
          to="/about"
        >
          About
        </Link>
      </div>
      {/* {currentCharacter && (
        <div className={styles.position_wrapper}>
          <p className={styles.position}>{currentCharacter}</p>
        </div>
      )} */}
    </header>
  );
};

export default Header;
