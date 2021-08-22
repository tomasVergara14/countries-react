import './App.css';
import CountryContainer from './Components/CountryContainer/CountryContainer';
import NavBar from './Components/NavBar/NavBar';
import SearchContextProvider from './Handlers/Context/SearchContext';

function App() {
  return (
    <SearchContextProvider>
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <CountryContainer/>      
      </header>
    </div>
    </SearchContextProvider>
  );
}

export default App;
