import React, { useEffect } from "react"
import "./Item.css"
import { NavLink } from "react-router-dom"
import Button from "../../../Button/Button"
import scrollTop from "../../../../utils/scrollTop"

const Item = ({ item }) => {

    const {id, title, price, image} = item 


    useEffect(() => {
        scrollTop()  
    }, [])

    return  <div className="col-12 col-sm-6 col-lg-4  itemListContainer--carta">
                <div className="itemListContainer--producto" >
                    <NavLink to={`/item/${id}`}>
                        <div className="listContainer--img">
                            {item.artist ? 
                                <img className="vinyl--img" src={image} /> 
                            :<img className="item--img" src={image} />
                            }
                        </div>
                    </NavLink>
                    <h3 className="item--title"> {title} </h3>
                    <h4 className="item--price">$ {price} </h4>

                    <div>
                        <NavLink to={`/item/${id}`}>
                            <Button text="View product" />
                        </NavLink>
                    </div>
                </div>
            </div>
}

export default Item 