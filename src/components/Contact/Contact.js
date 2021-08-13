import React, { useEffect } from 'react'
import { Form } from "react-bootstrap"
import scrollTop from '../../utils/scrollTop'
import CompleteDark from "../Button/CompleteDark"
import "./Contact.css"

function Contact() {

  useEffect(() => {
    scrollTop()  
  }, [])

  return (
    <>
      <div className="container ">
        <h2 className="section--subtitle green mt-4 mb-4" >Contacto_</h2>

        <div className="d-flex justify-content-center mt-5">

          <Form className="contact--form" >
            <Form.Group controlId="orderForm">
              <Form.Label className="form--label"  >Nombre </Form.Label>
              <Form.Control className="form--input"  type="text" />

              <Form.Label className="form--label" >Apellido</Form.Label>
              <Form.Control className="form--input" type="text" />

              <Form.Label className="form--label" >Correo Electronico</Form.Label>
              <Form.Control className="form--input" type="email" />

              <Form.Label className="form--label" >Teléfono</Form.Label>
              <Form.Control className="form--input" type="text" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="form--label" >Comentarios</Form.Label>
              <Form.Control className="form--input"  as="textarea" rows={4} />
            </Form.Group>

            <Form.Group controlId="botones">
              <div >
                <CompleteDark text="Enviar" type="submit" />
              </div>
            </Form.Group>

          </Form>
        </div>
      </div>
    </>
  )
}

export default Contact
