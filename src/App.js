import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Default from './pages/DefaultPage'
import Products from './pages/ProductsPage'
import ProductSingle from './pages/ProductSinglePg'
import Cart from './pages/CartPage'

import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    // <h1 className="text-danger">hello</h1>
    <div>
      <Navbar/>
      <Sidebar/>
      <SideCart/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/products/:id" component={ProductSingle}></Route>
          <Route component={Default}></Route>         
        </Switch>
      <Footer/>

    </div>
  )
}

export default App;
