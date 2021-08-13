import React from "react"

import Item from "./Item/Item.jsx"

const ItemList = ({ details }) => {

    return (
        <>
            {details.map((item) => {
                    return <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
            })}  
        </>
    )
}

export default ItemList