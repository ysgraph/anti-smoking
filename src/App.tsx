import React from 'react';
import './App.scss';
import './styles/_reset.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ElapsedTimeModule from './components/ElapsedTimeModule';

function App() {
  return (
    <div className="App">
      <Header />
      <ElapsedTimeModule />
      <Footer />
    </div>
  );
}

export default App;
