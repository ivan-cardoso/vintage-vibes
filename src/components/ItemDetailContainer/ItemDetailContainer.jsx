import React, { useState, useEffect } from "react"
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"

import { useProductContext } from "../Context/ProductContext"
import scrollTop from "../../utils/scrollTop.js"

const ItemDetailContainer = () => {

    const { id } = useParams()

    const { params } = useProductContext()
    params(id)

    useEffect(() => {
        scrollTop()  
    }, [])
    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer

