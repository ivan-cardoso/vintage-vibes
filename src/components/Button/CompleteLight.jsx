import React from 'react'
import "./Button.css"

function CompleteLight({text}) {
    return (
        <div>
            <button className="button btn--complete color-light" >{text}</button>  
        </div>
    )
}

export default CompleteLight