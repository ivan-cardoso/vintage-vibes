import React from 'react'
import { useCartContext } from "../Context/CartContext"
import "./CartItem.css"
import "./CartItem.css"
import ButtonClose from "../Button/ButtonClose"


function CartItem() {

    const { itemAdded, cleanProduct } = useCartContext()

    const removeItem = (p) => {
        cleanProduct(p.id)
    };

    return (
        <>
            <div  className="col-12  col-xl-9 p-0" >
            {itemAdded.map(item => {
                return (
                        <div key={item.id} className="row itemAdded--card  ">
                            <div className="col-12 col-md-3 itemAdded--img--container" >
                                <img src={item.image}  className="itemAdded--img"  />
                            </div>

                            <div className="col-12 col-md-9  itemAdded--details">

                                <div className="col-12 d-flex justify-content-between mt-3" >
                                    <h3 className="itemAdded--title "> {item.title} </h3>
                                    <div className="removeItem--desktop">
                                        <div onClick={() => removeItem(item)}>
                                            <ButtonClose/>
                                        </div>
                                    </div>


                                </div>

                                <div className="col-12 mt-3" >
                                    <h4 className="itemAdded--price" >U$D {item.price} </h4>
                                </div>

                                <div className="col-12 mt-3" >
                                    <p className="itemAdded--count">{item.countAdded} Items </p>
                                    <div className="removeItem--mobile">
                                        <div onClick={() => removeItem(item)}>
                                            <ButtonClose/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                )
            })}
            </div>
        </>
    )
}

export default CartItem
