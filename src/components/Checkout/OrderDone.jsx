import React from 'react'
import { useCartContext } from "../Context/CartContext"
import Modal from "react-bootstrap/Modal"
import {Link} from 'react-router-dom'
import ButtonClose from "../Button/ButtonClose.jsx"
import Button from "../Button/Button.jsx"
import "./OrderDone.css"




function OrderDone() {
    const {orderId, orderDone, showOrderDone, handleShowOrder, handleCloseOrder } = useCartContext()
    
    return (
        <>
            <Modal show={showOrderDone} onHide={handleCloseOrder} animation={true}>

                <Modal.Header className="pb-0" >
                    <Modal.Title></Modal.Title>
                    <div onClick={handleCloseOrder}>
                        <ButtonClose/>
                    </div>
                </Modal.Header>

                <Modal.Body className="modal--title" >
                    <h3 className="orderDone--title" >Vintage Vibes</h3>
                    <p className="orderDone--thanks" >¡Thanks for buy!</p>
                    <p className="orderDone--text" >Your order has been successfully processed</p>
                    <p className="orderDone--text" >To follow your order use this ID<span className="orderDone--id" > {orderId}</span></p>
                   
                    <div  onClick={handleCloseOrder}>
                        <Button  text="Ok! Back home" />
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default OrderDone
