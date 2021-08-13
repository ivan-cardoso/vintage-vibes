import React, { useEffect } from "react"
import scrollTop from "../../../utils/scrollTop.js"

import Item from "./Item/Item.jsx"

const ItemList = ({ details }) => {

    useEffect(() => {
        scrollTop()  
    }, [])

    return (
        <>
            {details.map((item) => {
                    return <Item  item={item}/>
            })}  
        </>
    )
}

export default ItemList