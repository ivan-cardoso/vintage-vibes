import React from 'react'
import {NavLink} from "react-router-dom"
import {useCartContext} from "../../../Context/CartContext"
import ButtonDark from  "../../../Button/ButtonDark"

function CheckoutBtn() {

    const {checkout, totalCart} = useCartContext() 

    return (
       
            <>
                <NavLink to="/checkout">
                <ButtonDark  onClick={checkout(), totalCart} text="Finalizar Compra" ></ButtonDark>     
                </NavLink>    
            </>
        
    )
}

export default CheckoutBtn
