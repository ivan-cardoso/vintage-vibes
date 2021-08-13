import React, { useEffect } from "react"
import "./ItemListContainer.css"

import ItemList from "./ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import {Spinner} from "react-bootstrap"

import {useProductContext} from "../Context/ProductContext"
import scrollTop from "../../utils/scrollTop"



const ItemListContainer = ({ titulo }) => {
    
    const { id } = useParams()

    const {itemsFirebase, setItemsFirebase, categoryParams} = useProductContext()
    
    categoryParams(id)

    useEffect(() => {
        scrollTop()  
    }, [])

    return (
        <>
            <section className="itemListContainer--content">
                <div className="container">
                    {console.log("FIREBASE", itemsFirebase)}
                    <h2 className="section--subtitle" >Our <span className="green" >Products_</span></h2>
                    
                    {itemsFirebase.length ? 
                        <h2 className="section--subtitle"><span className="green" >{id}</span></h2>
                        : <></>
                    }

                    <div className="row section--productos"> 
                        <ItemList details={itemsFirebase} />
                    </div>
                    {!itemsFirebase.length ? (
                        <div className="productos--spinner">
                            <Spinner animation="grow" size="md" variant="dark" /> 
                        </div>
                    )
                    : null}

                </div>
            </section>
        </>
    )
}

export default ItemListContainer