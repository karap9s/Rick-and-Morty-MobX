import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Modal from './ComponentsUtils/Modal/Modal';
import NotFound from './ComponentsUtils/NotFound/NotFound';
import Form from './Components/Form/Form';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/info" element={<Modal />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </div>
  );
};

export default App;