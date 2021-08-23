import React from 'react'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import "./CheckoutForm.css"
import ButtonClose from "../Button/ButtonClose.jsx"
import CompleteLight from "../Button/CompleteLight.jsx"

import { useCartContext } from "../Context/CartContext"


function CheckoutForm() {

    const {showForm, handleClose, createOrder, orderDone, handleBuyerChange} = useCartContext()

    return (
        <>
            <Modal show={showForm} onHide={handleClose} animation={true}  >
                <div className="checkout--form">
                 
                <Modal.Header >
                    <Modal.Title className="form--title" >Buy</Modal.Title>
                    <div onClick={handleClose} >
                        <ButtonClose/>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createOrder}>
                        <Form.Group controlId="orderForm">
                            <Form.Label className="form--label"  >Name*</Form.Label>
                            <Form.Control  
                                className="form--input"
                                required
                                name="name"
                                onChange={(e) =>{handleBuyerChange(e)}} 
                                type="text" />

                            <Form.Label className="form--label" >Lastname*</Form.Label>
                            <Form.Control  
                                className="form--input" 
                                required
                                name="lastName"
                                onChange={(e) =>{handleBuyerChange(e)}} 
                                type="text"  />

                            <Form.Label className="form--label" >Email*</Form.Label>
                            <Form.Control   
                                className="form--input" 
                                required
                                name="email"
                                onChange={(e) =>{handleBuyerChange(e)}} 
                                type="email"  
                            />
                                                            
                            <Form.Label className="form--label" >Phone*</Form.Label>
                            <Form.Control   
                                className="form--input"
                                required 
                                name="phone"
                                onChange={(e) =>{handleBuyerChange(e)}} 
                                type="number"  
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form--label" >Comments</Form.Label>
                            <Form.Control 
                            className="form--input" 
                            name="comments"
                            onChange={(e) =>{handleBuyerChange(e)}}  
                            as="textarea" 
                            rows={1} />
                        </Form.Group>
                        
                        <Form.Group controlId="botones">
                            <div onClick={orderDone}>
                                <CompleteLight text="Buy now" type="submit"   />
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
