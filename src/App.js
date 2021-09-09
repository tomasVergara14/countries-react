import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import CountryListContainer from './Components/CountryList/CountryListContainer';

import SearchContextProvider from './Handlers/Context/SearchContext';

function App() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <Switch>
        <>
        <div className="App">
          
          <Sidebar/>
          
          <Route exact path="/">
              <Main/>
          </Route>
          <Route exact path="/list">
            <CountryListContainer/>
          </Route>
          <Route exact path="/countriesFilter">
              <Main/>
          </Route>
        </div>
        </>
        </Switch>  
      </BrowserRouter> 
    </SearchContextProvider>
  );
}

export default App;
