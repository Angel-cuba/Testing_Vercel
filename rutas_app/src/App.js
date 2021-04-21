import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contacto from './componentes/contacto';
import Inicio from './componentes/inicio';
import Nosotros from './componentes/nosotros';
import  User  from './componentes/User';
import User_id from './componentes/User_id';

function App() {
  return (
    <Router>
      <div className="container mt-5">
    <h1>Desde App.js</h1>
    <div className="btn-group">
    <Link to="/" className="btn btn-info mr-4">
      Inicio
    </Link>
  <Link to="/contacto" className="btn btn-info mr-4">
      Contacto
    </Link>
      <Link to="/nosotros/:id" className="btn btn-info mr-4">
      Nosotros
    </Link>
    <Link to="/user" className="btn btn-dark">
    User_id
    </Link>
    </div>



    <hr/>

<Switch>
<Route path="/nosotros/:id">
<User />

</Route>

  <Route path="/" exact>
    Parte de inicio
    <Inicio/>
  </Route>
  <Route path="/contacto">
    Parte de contacto
    <Contacto/>
  </Route>
  <Route path="/nosotros">
    Parte de nosotros
    <Nosotros/>
  </Route>
  <Route to="/user_id">
    <User_id />
  </Route>

</Switch>


    </div>
    </Router>
  
  );
}

export default App;
