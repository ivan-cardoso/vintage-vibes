import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    
    const showNav = () =>{

    } 
    
    return (
        <Navbar expand="lg" className="navbar--estilos" sticky="top" >
            <div className="container nav--container ">
                <Navbar.Brand href="#home">
                    <NavLink className="navbar-brand padding--nav" to="/" exact >
                        <h1 className="navbar--logo">RIBEREÑO</h1>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="margin--nav"/>
                <Navbar.Collapse  className="navbar--collapse" id="basic-navbar-nav">
                    <Nav className="mr-auto ">

                        <Nav.Link href="#home">
                            <NavLink className="nav-link" to="/" exact >home</NavLink>
                        </Nav.Link>

                        <NavLink className="nav-link" to="/productos" >
                            <NavDropdown title="productos" id="basic-nav-dropdown"  >
                                <NavDropdown.Item >
                                    <NavLink className="navbar--items__estilos" to="/productos/billeteras">billeteras</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <NavLink className="navbar--items__estilos" to="/productos/bolsos">bolsos </NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <NavLink className="navbar--items__estilos" to="/productos/materas"> materas</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <NavLink className="navbar--items__estilos" to="/productos/accesorios">accesorios</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <NavLink className="navbar--items__estilos" to="/productos">ver todos</NavLink>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </NavLink>

                        <Nav.Link href="#nosotros">
                            <NavLink className="nav-link" to="/nosotros" >nosotros</NavLink>
                        </Nav.Link>

                        <Nav.Link href="#contacto">
                            <NavLink className="nav-link" to="/contacto" >
                                contacto
                        </NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <NavLink className="nav-link nav--cart--icon padding--nav" to="/checkout">
                    <CartWidget />
                </NavLink>

            </div>
        </Navbar>

    )
}


export default NavBar