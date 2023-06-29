import Nav from "./Nav";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import AgregarVideojuego from "./componentes/AgregarVideojuego";
import VerVideojuegos from "./componentes/VerVideojuegos";
import EditarVideojuego from "./componentes/EditarVideojuego";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Switch>
            <Route path="/videojuegos/agregar">
              <AgregarVideojuego></AgregarVideojuego>
            </Route>
            <Route path="/videojuegos/editar/:id">
              <EditarVideojuego></EditarVideojuego>
            </Route>
            <Route path="/videojuegos/ver">
              <VerVideojuegos></VerVideojuegos>
            </Route>
            <Route path="/">
              <VerVideojuegos></VerVideojuegos>
            </Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='registro' element={<Registro></Registro>}></Route>
          </Switch>

        </div>
      </div >
    </div >
  );
}

export default App;
