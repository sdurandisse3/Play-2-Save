import React from 'react';
import SignUp from './containers/signup';
import Header from './components/header';
import { HashRouter, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
<HashRouter>
  <>
  <Header/>
  <Route path='/signup' exact component={SignUp}/>

  </>
</HashRouter>

    
    </div>
  );
}

export default App;
