import React from 'react'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import "./CheckoutForm.css"
import ButtonClose from "../Button/ButtonClose"
import CompleteLight from "../Button/CompleteLight"

import { useCartContext } from "../Context/CartContext"


function CheckoutForm() {

    const {showForm, handleClose, createOrder, orderName,setOrderName, orderLastName, setOrderLastName, orderPhone, setOrderPhone, orderEmail, setOrderEmail,orderComments, setOrderComments, 
        orderId, orderDone, handleShowOrder} = useCartContext()

    return (
        <>
            <Modal show={showForm} onHide={handleClose} animation={true}  >
                <div className="checkout--form">
                 
                <Modal.Header >
                    <Modal.Title className="form--title" >Finalizar compra</Modal.Title>
                    <div onClick={handleClose} >
                        <ButtonClose/>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createOrder}>
                        <Form.Group controlId="orderForm">
                            <Form.Label className="form--label"  >Nombre </Form.Label>
                            <Form.Control  className="form--input" onChange={(e) =>{setOrderName(e.target.value)}} type="text" />

                            <Form.Label className="form--label" >Apellido</Form.Label>
                            <Form.Control  className="form--input" onChange={(e) =>{setOrderLastName(e.target.value)}} type="text"  />

                            <Form.Label className="form--label" >Correo Electronico</Form.Label>
                            <Form.Control   className="form--input" onChange={(e) =>{setOrderEmail(e.target.value)}} type="email"  />
                                                            
                            <Form.Label className="form--label" >Teléfono</Form.Label>
                            <Form.Control   className="form--input" onChange={(e) =>{setOrderPhone(e.target.value)}} type="text"  />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form--label" >Comentarios</Form.Label>
                            <Form.Control   className="form--input" onChange={(e) =>{setOrderComments(e.target.value)}}  as="textarea" rows={1} />
                        </Form.Group>
                        
                        <Form.Group controlId="botones">
                            <div onClick={orderDone}>
                                <CompleteLight text="Comprar" type="submit"   />
                            </div>
                        </Form.Group>

                    </Form>
                </Modal.Body>

                   </div>
            </Modal>
            
        </>
    )
}

export default CheckoutForm
