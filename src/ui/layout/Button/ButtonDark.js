import React from 'react'
import "./Button.css"

function ButtonDark({text}) {
    return (
        <div>
            <button className="button color-dark" >{text}</button>  
        </div>
    )
}

export default ButtonDark
