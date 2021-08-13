import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import categories from "../../utils/categories"

const NavBar = () => {
    
    const closeDropdown = () =>{
        const dropDown = document.getElementById("basic-nav-dropdown")
        dropDown.setAttribute("aria-expanded", "false")
        document.querySelector(".dropdown").classList.remove("show");
        document.querySelector(".dropdown-menu").classList.remove("show");
    }

    const openDropdown = ()=>{
        const dropDown = document.getElementById("basic-nav-dropdown")
        dropDown.setAttribute("aria-expanded", "true")
        document.querySelector(".dropdown").classList.add("show")
        document.querySelector(".dropdown-menu").classList.add("show")
    }   

    return (
        <Navbar expand="lg" className="navbar--estilos" sticky="top" >
            <div className="container nav--container ">
                <Navbar.Brand href="#home">
                    <NavLink className="navbar-brand padding--nav" to="/" exact >
                        <h1 className="navbar--logo">Vv</h1>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="margin--nav"/>
                <Navbar.Collapse  className="navbar--collapse" id="basic-navbar-nav">
                    <Nav className="mr-auto ">

                        <Nav.Link href="#home">
                            <NavLink className="nav-link" to="/" exact >home</NavLink>
                        </Nav.Link>

                        <div className="nav-link">
                            <NavDropdown title="products" id="basic-nav-dropdown"  /*onClick={()=> openDropdown()}*/ >
                                {categories.map((category)=>{
                                    return (
                                        <Link to={`/productos/${category}`} onClick={()=> closeDropdown()}>
                                            {/* <div> */}
                                                <p className="navbar--items__estilos" >{category}</p>
                                            {/* </div> */}
                                        </Link>
                                    )
                                })}

                                <NavLink className="navbar--items__estilos" to="/productos">ver todos</NavLink>
                                

                            </NavDropdown>
                        </div>

                        <Nav.Link href="#nosotros">
                            <NavLink className="nav-link" to="/nosotros" >about</NavLink>
                        </Nav.Link>

                        <Nav.Link href="#contacto">
                            <NavLink className="nav-link" to="/contacto" >
                                contact
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