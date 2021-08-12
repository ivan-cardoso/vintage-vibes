import React, { useState, useEffect } from 'react'
import "./ItemDetail.css"
import AddCart from '../../AddCart/AddCart'
import ItemCount from "../../ItemCount/ItemCount"
import CheckoutBtn from "./ChekoutBtn/CheckoutBtn"


import {useCartContext} from "../../Context/CartContext"
import {useProductContext} from "../../Context/ProductContext"


const ItemDetail = () => {


    const {compra, countAdded, itemAdded, getCount, addProduct} = useCartContext()
    const {itemsFirebase, itemDetail} = useProductContext()

    return (
        <>
            <div>
                {itemDetail === undefined ?
                    (<p>Cargando datos </p>)
                   
                    : <div className="itemDetail--container" >
                        <div className="container" >
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 itemDetail--imgContainer">
                                
                                    <img className="itemDetail--img" src={itemDetail.image} />
                            </div>                   

                            <div className="col-12 col-md-6 details--container">
                                <h3 className="itemDetail--title"> {itemDetail.title} </h3>
                                <p> {itemDetail.description} </p>
                                <p className="itemDetail--price"> $ {itemDetail.price} </p>
                                <p> Medidas: {itemDetail.size} </p>
                                
                                <AddCart/>

                                {!compra && <ItemCount initial={1} stock={10}/> }
                                

                                {compra && <CheckoutBtn />}

                            </div>                            
                        </div>
                        </div>
                    </div>
            
                }
            </div>
        </>
    )
}

export default ItemDetail 