import './App.css';

import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Principal from "./Principal/Principal"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import CartProvider from "./Context/CartContext"
import ProductProvider from './Context/ProductContext';
import Checkout from './Checkout/Checkout';
import About from './About/About';
import Contact from './Contact/Contact';

import Footer from "./Footer/Footer"



function App() {

  

  return (
    <BrowserRouter>

      <ProductProvider>
        <CartProvider>
          <NavBar />
          <Switch>

            <Route path="/" exact>
              <Principal />
            </Route>

            <Route path="/productos/" exact>
              <ItemListContainer />
            </Route>

            <Route path="/productos/:id"  >
                <ItemListContainer/> 
            </Route>

            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route path="/checkout/">
              <Checkout />
            </Route>

            <Route path="/nosotros/">
              <About/>
            </Route>

            <Route path="/contacto/">
              <Contact/>
            </Route>
    
          </Switch>

        </CartProvider>
      </ProductProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

