import React, { useState, useEffect } from 'react'
import "./ItemDetail.css"
import AddCart from '../../AddCart/AddCart.jsx'
import ItemCount from "../../ItemCount/ItemCount.jsx"
import CheckoutBtn from "./ChekoutBtn/CheckoutBtn"


import {useCartContext} from "../../Context/CartContext"
import {useProductContext} from "../../Context/ProductContext"


const ItemDetail = () => {


    const {compra, countAdded, itemAdded, getCount, addProduct} = useCartContext()
    const {itemsFirebase, itemDetail} = useProductContext()
    const [showAdd, setShowAdd] = useState(true)

    const handleShowAdd = () =>{
        setShowAdd(false)
    }

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
            
                }
            </div>
        </>
    )
}

export default ItemDetail 


/**
    {
        category : "",
        description : "Vintage Vibes is the home of vintage mens and womens clothing, vintage sportswear, vintage dresses, vintage sweatshirts, vintage t-shirts and vintage jeans.",
        image : "",
        price : 0,
        size : "L",
        stock : 10,
        title : ""
    }
 */