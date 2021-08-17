import {useEffect} from "react"
import './App.css';
import NavBar from "./NavBar/NavBar.jsx";
import ItemListContainer from "./ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";
import Principal from "./Principal/Principal.jsx"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import CartProvider from "./Context/CartContext"
import ProductProvider from './Context/ProductContext';
import Checkout from './Checkout/Checkout.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';

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

            <Route exact path="/products"  component={ItemListContainer}></Route>

            <Route exact path="/products/:id"  component={ItemListContainer}></Route>

            <Route exact path="/item/:id"  component={ItemDetailContainer}></Route>

            <Route exact path="/checkout"  component={Checkout}></Route>

            <Route exact path="/about"  component={About}></Route>

            <Route exact path="/contact"  component={Contact}></Route>

            <Redirect to={"/"} />
          </Switch>

        </CartProvider>
      </ProductProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

