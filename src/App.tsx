import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="wrapper">
    <Header />
    <Main />
    <Footer />
    </div>
  );
};

export default App;