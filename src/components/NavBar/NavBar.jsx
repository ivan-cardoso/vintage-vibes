import React, {useState} from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import {FiMenu,FiXCircle,FiChevronDown } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom"
import categories from "../../utils/categories"

const NavBar = () => {

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
        <header className="header__middle">
        <div className="container  navbar--container">
            <div className="row">
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
                        </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
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