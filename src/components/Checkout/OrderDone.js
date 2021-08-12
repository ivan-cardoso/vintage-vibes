import React from 'react'
import { useCartContext } from "../Context/CartContext"
import Modal from "react-bootstrap/Modal"
import {Link} from 'react-router-dom'
import ButtonClose from "../Button/ButtonClose"
import Button from "../Button/Button"
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
                    <h3 className="orderDone--title" >Compra realizada</h3>
                    <p className="orderDone--thanks" >¡Gracias por tu compra!</p>
                    <p className="orderDone--text" >En breve nos comunicaremos contigo mediante mail</p>
                    <p className="orderDone--text" >El ID de tu compra es <span className="orderDone--id" > {orderId}</span></p>
                   
                    <div  onClick={handleCloseOrder}>
                        <Button  text="Volver" />
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default OrderDone
