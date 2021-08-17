import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../Context/CartContext"
import { useProductContext } from "../Context/ProductContext"
import CartItem from './CartItem.jsx'

import CheckoutForm from './CheckoutForm.jsx'
import OrderDone from "./OrderDone.jsx"
import "./Checkout.css"

import ButtonDark from "../Button/ButtonDark.jsx"
import CompleteDark from "../Button/CompleteDark.jsx"
import CompleteLight from "../Button/CompleteLight.jsx"
import scrollTop from '../../utils/scrollTop'

function Checkout() {
    const { item } = useProductContext()
    const { itemAdded, cleanProduct, cleanCart, totalCart, showForm, handleShow, orderId, orderDone } = useCartContext()


    useEffect(() => {
        scrollTop()  
    }, [])

    return (

        <>
            <div className="container checkout--section">
                {itemAdded.length === 0 ? (
                    <div className="empty--cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cart3 cart--icon" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <p className="empty--cart--title">No items</p>
                        <NavLink to="/products">
                            <ButtonDark text="All products" />
                        </NavLink>
                    </div>
                )
                    : <div className="row card--items mt-4">

                        <CartItem />

                        <div className="col-12 col-xl-3 card--checkout " >
                            <h4 className="card--checkout--title" >Total cart</h4>

                            <p className="total--price" >Total: <span className="total--number">$ {totalCart()} </span> </p>

                            <div onClick={cleanCart} className="mt-4">
                                <CompleteLight  text="Clear" />
                            </div> 

                            <div onClick={handleShow} className="mt-4">
                                <CompleteDark  text="Buy now"/>
                            </div>  

                        </div>

                    </div>
                }

                {!orderId && <CheckoutForm />}

                {orderId ? (<OrderDone />) : null}
            </div>
        </>
    )


}


export default Checkout