import React, {useState} from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {FiMenu,FiXCircle,FiChevronDown } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom"
import categories from "../../utils/categories"

const NavBar = () => {

    const closeDropdown = () => {
        const dropDown = document.getElementById("basic-nav-dropdown")
        dropDown.addEventListener("click", (e) => {
            e.preventDefault()
            dropDown.setAttribute("aria-expanded", "false")
        })
        document.querySelector(".dropdown").classList.remove("show");
        document.querySelector(".dropdown-menu").classList.remove("show");
    }

    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        // <Navbar expand="lg" className="navbar--estilos" sticky="top" >
        //     <div className="container nav--container ">
        //         <Navbar.Brand href="#home">
        //             <NavLink className="navbar-brand padding--nav" to="/" exact >
        //                 <h1 className="navbar--logo">Vv</h1>
        //             </NavLink>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" className="margin--nav"/>
        //         <Navbar.Collapse  className="navbar--collapse" id="basic-navbar-nav">
        //             <Nav className="mr-auto ">

        //                 <Nav.Link href="#home">
        //                     <NavLink className="nav-link" to="/" exact >home</NavLink>
        //                 </Nav.Link>

        //                 <div className="nav-link">
        //                     <NavDropdown title="products" id="basic-nav-dropdown"  /*onClick={()=> openDropdown()}*/ >
        //                         {categories.map((category)=>{
        //                             return (
        //                                 <Link to={`/productos/${category}`} 
        //                                     // onClick={closeDropdown}
        //                                 >
        //                                     {/* <div> */}
        //                                         <p className="navbar--items__estilos" >{category}</p>
        //                                     {/* </div> */}
        //                                 </Link>
        //                             )
        //                         })}

        //                         <NavLink 
        //                             className="navbar--items__estilos" 
        //                             to="/productos"
        //                             // onClick={()=> closeDropdown()}
        //                             >
        //                                 see all
        //                         </NavLink>


        //                     </NavDropdown>
        //                 </div>

        //                 <Nav.Link href="#nosotros">
        //                     <NavLink className="nav-link" to="/nosotros" >about</NavLink>
        //                 </Nav.Link>

        //                 <Nav.Link href="#contacto">
        //                     <NavLink className="nav-link" to="/contacto" >
        //                         contact
        //                 </NavLink>
        //                 </Nav.Link>
        //             </Nav>

        //         </Navbar.Collapse>
        //         <NavLink className="nav-link nav--cart--icon padding--nav" to="/checkout">
        //             <CartWidget />
        //         </NavLink>

        //     </div>
        // </Navbar>

        <header className="header__middle">
        <div className="container  navbar--container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <h1 className="navbar--logo">Vv</h1>
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" 
                        style={{ display: 'none' }} 
                        onClick={toggleClass} >
                             <FiXCircle />
                        </span>
                    </> : <> 
                        <span className="menubar__button" 
                            style={{ display: 'none' }} 
                            onClick={toggleClass} > 
                            <FiMenu />   
                        </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active'
                            onClick={toggleClass} 
                            to={`/`}> home </NavLink> 
                        </li>
                        
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > 
                            <Link to="#"> products 
                            <FiChevronDown /> 
                            {/* <p>p</p> */}
                        </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                {/* <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li> */}
                                {categories.map((category)=>{
                                    return (
                                        <Link to={`/products/${category}`} onClick={toggleClass} activeClassName='is-active'>
                                            <p className="navbar--items__estilos" >{category}</p>
                                        </Link>
                                    )
                                })}
                                <Link to={`/products`} onClick={toggleClass} activeClassName='is-active'>
                                        <p className="navbar--items__estilos" >see all</p>
                                </Link>
                            
                            </ul>
                        </li>
                        <li className="menu-item " >
                            <NavLink onClick={toggleClass} 
                            activeClassName='is-active' 
                            to={`/about`}> about </NavLink> </li>
                        <li className="menu-item " >
                            <NavLink onClick={toggleClass} 
                            activeClassName='is-active' 
                            to={"/contact"}> contact </NavLink> </li>
                        
                        <li className="menu-item" >
                            <NavLink onClick={toggleClass} 
                            // className="nav-link nav--cart--icon padding--nav"
                            activeClassName='is-active' 
                            to={"/checkout"}>
                                <CartWidget />
                            </NavLink> 
                        </li>

                    </ul>
                    </nav>     
                </div>   
            </div>
        </div>
        </header>

    )
}


export default NavBar