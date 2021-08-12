import React from 'react'
import "./Button.css"

function CompleteDark({text}) {
    return (
        <div>
            <button className="button btn--complete color-dark" >{text}</button>  
        </div>
    )
}

export default CompleteDark