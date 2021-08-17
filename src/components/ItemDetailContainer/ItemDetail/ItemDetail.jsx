import React, { useState, useEffect } from 'react'
import "./ItemDetail.css"
import AddCart from '../../AddCart/AddCart.jsx'
import ItemCount from "../../ItemCount/ItemCount.jsx"
import CheckoutBtn from "./ChekoutBtn/CheckoutBtn.jsx"
import {Spinner} from "react-bootstrap"

import {useCartContext} from "../../Context/CartContext"
import {useProductContext} from "../../Context/ProductContext"
import {Link} from 'react-router-dom'
import ButtonDark from '../../Button/ButtonDark'


const ItemDetail = () => {


    const {compra, countAdded, itemAdded, getCount, addProduct} = useCartContext()
    const {itemsFirebase, itemDetail} = useProductContext()
    const [showAdd, setShowAdd] = useState(true)

    const handleShowAdd = () =>{
        setShowAdd(false)
    }

    return (
        <>
            {/* {itemDetail && itemDetail.id ?  */}
            
            {console.log("ITEM DETAIL", itemDetail)}
            {itemDetail.id ? 
                <div className="itemDetail--container" >
                    <div className="container" >
                    <div className="row pt-4">
                        <div className="col-12 col-md-6 itemDetail--imgContainer">
                                {itemDetail.artist ? 
                                    <img className="itemDetail--img--vinyl" src={itemDetail.image} />
                                : <img className="itemDetail--img" src={itemDetail.image} />
                                }
                        </div>                   

                        <div className="col-12 col-md-6 details--container">
                            <h3 className="itemDetail--title"> {itemDetail.title} </h3>
                            <p> {itemDetail.description} </p>
                            <p className="itemDetail--price"> $ {itemDetail.price} </p>
                            {itemDetail.artist && <p>{itemDetail.artist}</p>}
                            {itemDetail.size && <p>{itemDetail.size} </p>}

                            {showAdd && 
                                <div onClick={()=> handleShowAdd()} >
                                    <AddCart/> 
                                </div>
                            }
                            
                            {!compra && <ItemCount initial={1} stock={10}/> }
                            {compra && <CheckoutBtn />}

                        </div>                            
                    </div>
                    </div>
                </div>
            :   
                itemDetail[0] === "err" ? 
                    <div className="productos--spinner">
                        <h3 className="itemDetail--title"> Product not found </h3>
                        <Link to={"/productos"}>
                            <ButtonDark text={"Back to products"}/>
                        </Link>
                    </div>
                : 
                    <div className="productos--spinner">
                        <Spinner animation="grow" size="md" variant="dark" />
                    </div>           
            }
        </>
    )
}

export default ItemDetail 
