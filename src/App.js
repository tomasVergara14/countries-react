import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

import SearchContextProvider from './Handlers/Context/SearchContext';

function App() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <Switch>

        <div className="App">
          
          <Sidebar/>
          
          <Route exact path="/">
              <Main/>
          </Route>

        </div>
    
        </Switch>  
      </BrowserRouter> 
    </SearchContextProvider>
  );
}

export default App;
