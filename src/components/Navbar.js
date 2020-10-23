import React from 'react'
import { FaBars, FaCartPlus } from "react-icons/fa"
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <ProductConsumer>
           {value => {
               const {cartItems,handleSidebar,handleCart} = value;
               return(
                   <NavWrapper>
                       <div className="nav-center">
                           <FaBars className="nav-icon" onClick={handleSidebar}/>
                           <img src={logo} alt=""/>
                           <div className="nav-cart">
                              <FaCartPlus className="nav-icon" onClick={handleCart}></FaCartPlus> 
               <div className="cart-items">{cartItems}</div>
                           </div>
                       </div>
                   </NavWrapper>
               )
           }}
        </ProductConsumer>
    )
}


const NavWrapper = styled.nav  `
position:sticky;
top:0;
width:100%;
padding:1rem 1.5rem;
background:var(--mainGrey);
border:1px solid var(--primaryColor);

.nav-center{
    max-width:1170px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    background: var(--primaryColor);
    color: var(--mainWhite);
    top: -11px;
    right: -20px;
    font-size: 0.85rem;
    border-radius: 100%;
    width: 25px;
    text-align: center;
  }
`
