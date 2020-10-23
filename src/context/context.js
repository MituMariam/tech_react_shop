
import React, { Component } from "react";
import { linkData } from "./linkdata";

const ProductContext = React.createContext();

//provider
//consumer
class ProductProvider extends Component {
state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData
}

//handle sidebar
handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen }) 
}
//handle Cart
handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen }) 
}

//close cart
closeCart = () => {
    this.setState({ cartOpen: false }) 

}

//open cart
openCart = () => {
    this.setState({ cartOpen: true }) 

}

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
