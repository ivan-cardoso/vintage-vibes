import {useEffect} from "react"
import './App.css';
import NavBar from "./NavBar/NavBar.jsx";
import ItemListContainer from "./ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";
import Principal from "./Principal/Principal.jsx"
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom"

import CartProvider from "./Context/CartContext"
import ProductProvider from './Context/ProductContext';
import Checkout from './Checkout/Checkout';
import About from './About/About';
import Contact from './Contact/Contact';

import Footer from "./Footer/Footer.jsx"
import scrollTop from "../utils/scrollTop"


const App = ()=> {

  useEffect(() => {
    scrollTop()  
  }, [])
  

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <NavBar />
          <Switch>

            <Route exact path="/"  component={Principal}></Route>

            <Route path="/productos/" exact>
              <ItemListContainer />
            </Route>

            <Route exact path="/productos/:id"  >
                <ItemListContainer  /> 
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/checkout/">
              <Checkout />
            </Route>

            <Route exact path="/nosotros/">
              <About/>
            </Route>

            <Route exact path="/contacto/">
              <Contact/>
            </Route>

            <Redirect to={"/"} />
          </Switch>

        </CartProvider>
      </ProductProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

