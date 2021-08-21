import './App.css';
import CountryContainer from './Components/CountryContainer/CountryContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar></NavBar>
          <CountryContainer></CountryContainer>      
      </header>
    </div>
  );
}

export default App;
