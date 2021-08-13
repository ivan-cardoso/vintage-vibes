import React, {useEffect} from "react"
import scrollTop from "../../utils/scrollTop.js"
import Carrousel from "../Carrousel/Carrousel.jsx"
import "./Principal.css"


const Principal = () =>{

    useEffect(() => {
        scrollTop()  
    }, [])

    return(
        <div className="principal--content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 principal--title">
                            <p className="principal--title__estilos">
                                We are <span className="title--brand" >Vintage Vibes_</span>
                            </p>
                            <p className="principal--title__estilos">
                                New & Recycled 
                            </p>
                            <p className="principal--title__estilos">
                                Products
                            </p>
                        </div>
                        
                        <Carrousel/>
                    </div>
                </div>
            </div>
    )
}

export default Principal