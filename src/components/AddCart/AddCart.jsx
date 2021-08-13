import React from 'react'
import {useCartContext} from "../Context/CartContext"
import Button from "../Button/Button"

function AddCart() {

    const {addItem} = useCartContext()
    
    return (
        <div onClick={addItem}>
            <Button  text="Agregar a carrito"/>
        </div>
    )
}

export default AddCart
