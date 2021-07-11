import './styles/_reset.scss';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ElapsedTimeModule from './components/ElapsedTimeModule';
import SavingMoneyModule from './components/SavingMoneyModule';
import SavingTimeModule from './components/SavingTimeModule';
import ShareButton from './components/ShareButton';

function App() {
  return (
    <div className="App">
      <Header />
      <ElapsedTimeModule />
      {/* <div style={{
        display: "flex",
        alignItems: "center",
      }}> */}
        <SavingMoneyModule />
        <SavingTimeModule />
      {/* </div> */}
      <ShareButton />
      <Footer />
    </div>
  );
}

export default App;
