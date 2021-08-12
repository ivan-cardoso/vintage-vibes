import React from "react"
import "./ItemListContainer.css"

import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

import {useProductContext} from "../Context/ProductContext"


const ItemListContainer = ({ titulo }) => {
    
    const { id } = useParams()

    const {itemsFirebase, setItemsFirebase, categoryParams} = useProductContext()
    
    categoryParams(id)

    return (
        <>
            <section className="itemListContainer--content">
                <div className="container">
                    <h2 className="section--subtitle" >Nuestros <span className="green" >Productos_</span></h2>
                    <div className="row section--productos"> 

                        <ItemList details={itemsFirebase} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemListContainer