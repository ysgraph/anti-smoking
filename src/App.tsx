import React from 'react';
import './styles/_reset.scss';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ElapsedTimeModule from './components/ElapsedTimeModule';
import SavingMoneyModule from './components/SavingMoneyModule';

function App() {
  return (
    <div className="App">
      <Header />
      <ElapsedTimeModule />
      <SavingMoneyModule />
      <Footer />
    </div>
  );
}

export default App;
