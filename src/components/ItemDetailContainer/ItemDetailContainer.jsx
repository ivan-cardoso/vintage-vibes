import React, { useState, useEffect } from "react"
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"

import { useProductContext } from "../Context/ProductContext"

const ItemDetailContainer = () => {

    const { id } = useParams()

    const { params } = useProductContext()
    params(id)

    
    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer

