import data from "./data";
import { BrowserRouter, Route } from "react-router-dom";

import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              amazona
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </main>
        <footer className="row center">
          <p>All Rights Reserved 2021</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
