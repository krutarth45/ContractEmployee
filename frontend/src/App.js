import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default App;
