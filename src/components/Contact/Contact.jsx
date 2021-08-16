import React, { useEffect, useState } from 'react'
import { Form, Modal } from "react-bootstrap"
import scrollTop from '../../utils/scrollTop'
import CompleteDark from "../Button/CompleteDark"
import ButtonClose from "../Button/ButtonClose"
import "./Contact.css"
import {useHistory} from "react-router-dom"

function Contact() {

  useEffect(() => {
    scrollTop()  
  }, [])

  const [values, setValues] = useState({})
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name] : value})
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setShowModal(true)
  }

  const handleClose = () =>{
    setValues({})
    setShowModal(false)
  }

  const backHome = () => {
    history.push("/")
  }

  return (
    <>
      <div className="container ">
        <h2 className="section--subtitle green mt-4 mb-4" >Contact_</h2>

        <div className="d-flex justify-content-center mt-5">
          {console.log("VALUES", values)}
          <Form className="contact--form" onSubmit={(e)=>handleSubmit(e)} >
            <Form.Group controlId="orderForm">
              <Form.Label className="form--label">Name *</Form.Label>
              <Form.Control 
                onChange={(e)=>handleChange(e)} 
                name="name"
                className="form--input" 
                required 
                type="text" />

              <Form.Label className="form--label" >Lastname *</Form.Label>
              <Form.Control 
                onChange={(e)=>handleChange(e)} 
                name="lastname"
                className="form--input" 
                required 
                type="text" />

              <Form.Label className="form--label" >Email *</Form.Label>
              <Form.Control 
                name="email"
                onChange={(e)=>handleChange(e)}  
                className="form--input" 
                required 
                type="email" />

              <Form.Label className="form--label" >Phone</Form.Label>
              <Form.Control 
                name="phone"
                onChange={(e)=>handleChange(e)} 
                className="form--input" 
                type="number" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="form--label" >Comments</Form.Label>
              <Form.Control 
                name="comments"
                onChange={(e)=>handleChange(e)} 
                className="form--input"  
                as="textarea" 
                rows={4} />
            </Form.Group>

            <Form.Group controlId="botones">
              <div >
                <CompleteDark text="Send" type="submit" />
              </div>
            </Form.Group>

          </Form>



          <Modal 
            show={showModal} onHide={handleClose} animation={true}
            >
                <div className="checkout--form">
                 
                <Modal.Header >
                    <Modal.Title className="form--title" >Hi, {values.name}</Modal.Title>
                    <div onClick={handleClose} >
                        <ButtonClose/>
                    </div>
                </Modal.Header>

                <Modal.Body>
                  <h4>We appreciate your comments </h4>

                  
                  
                  <div className="mt-5">
                    <p className="form--label">
                      We'll take your comments to improve our services   
                    </p>  
                  </div>  

                  <div className="mt-5" onClick={()=>backHome()} >
                    <CompleteDark text={"Back"} />
                  </div>
                </Modal.Body>

                   </div>
            </Modal>


        </div>
      </div>
    </>
  )
}

export default Contact
