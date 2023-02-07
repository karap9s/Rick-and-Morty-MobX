import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import NotFound from './ComponentsUtils/NotFound/NotFound';
import Form from './Components/Form/Form';
import Information from './Components/Information/Information';
import FormUtils from './Components/Form/FormUtils';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form form={FormUtils} />} />
        <Route path="/info" element={<Information />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </div>
  );
};

export default App;