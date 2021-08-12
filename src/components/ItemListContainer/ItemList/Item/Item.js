import React from "react"
import "./Item.css"
import { NavLink } from "react-router-dom"
import Button from "../../../Button/Button"

const Item = ({ id, title, price, image }) => {

    return  <div className="col-12 col-sm-6 col-lg-4  itemListContainer--carta">
                <div className="itemListContainer--producto" >
                    <NavLink to={`/item/${id}`}>
                        <div className="listContainer--img">
                            <img className="item--img" src={image} />
                        </div>
                    </NavLink>
                    <h3 className="item--title"> {title} </h3>
                    <h4 className="item--price">$ {price} </h4>

                    <div>
                        <NavLink to={`/item/${id}`}>
                            <Button text="Ver producto" />
                        </NavLink>
                    </div>
                </div>
            </div>
}

export default Item 