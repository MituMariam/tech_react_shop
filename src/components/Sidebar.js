import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import { Link } from "react-router-dom";
// import './Sidebar.css'


export default function Sidebar() {
    return (
        <ProductConsumer>
          {value => {
              const{links,sidebarOpen, handleSidebar} = value;
              return(
                  <SidebarWrapper show={sidebarOpen}>
 <div className="sidebarWrapper" >
                      <ul>
                          {links.map(link => {
                              return(

                              <li key={link.id}>
                                <Link to={link.path} onClick={handleSidebar} className="sidebar-link">{link.text}</Link>
                              </li>
                              )
                          }) }
                      </ul>
                  </div>
                  </SidebarWrapper>
                 
              )
          }}
        </ProductConsumer>
    )
}

const SidebarWrapper = styled.nav`
 background: #fff;
    border-right:1px solid var(--primaryColor) ;
    position: fixed;
    top:60px;
    height: 100vh;
    left: 0;
    width: 20%;
    z-index: 1;
    border-right: 2px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform:${props => (props.show? "translateX(0)" : "translateX(-100%)")};
    @media (min-width: 576px) {
      width: 20rem;
    }

    ul {
      list-style: none;
      padding: 0 !important;
    }

    .sidebar-link {
      display: block;
      padding: 0.5rem 1.5rem;
      background: transparent;
      text-transform: uppercase;
      color: var(--mainBlack);
    }

    .sidebar-link:hover{
        background: var(--primaryColor);
        text-decoration: none;
        color: #fff;
    }
`;
