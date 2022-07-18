import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import Products from './Components/Products/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/:id">
          <Details />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
