import { Route, Link, Switch } from "wouter";
import Home from "./components/Home";
import BebidasFavoritas from "./components/BebidasFavoritas";

function App() {
  return (
    <>
      <header className="p-3 ">
        <h1>Buscador de Bebidas</h1>
      </header>
        <Route path="/bebidasFavoritas">
          <BebidasFavoritas />
        </Route>
        <Route path="/">
          <Home />
        </Route>
    </>
  );
}

export default App;
