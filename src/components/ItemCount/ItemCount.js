import React, { useState, useEffect } from "react"
import "./ItemCount.css"
import { useCartContext } from "../Context/CartContext"


const ItemCount = ({ initial, stock }) => {

    const { getCount } = useCartContext()

    const [numero, setNumero] = useState(initial)

    const aumentarItem = () => {
        setNumero(numero => {
            let sumar = numero < stock ? (numero + 1) : numero
            return sumar
        })
    }
    const restarItem = () => {
        setNumero(numero => {
            let restar = numero <= 1 ? (1) : (numero - 1)
            return restar
        })
    }

    useEffect(() => {
        getCount(numero)
    }, [numero])


    return (
        <>
            

            <div className="d-flex count--container">
                <button onClick={restarItem} className="count--button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>

                <p className="m-0 count--number">{numero}</p>

                <button onClick={aumentarItem}  className="count--button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>

        </>
    )
}

export default ItemCount 