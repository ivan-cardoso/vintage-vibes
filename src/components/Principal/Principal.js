import React from "react"
import Carrousel from "../Carrousel/Carrousel"
import "./Principal.css"


const Principal = () =>{
    return(
        <div className="principal--content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 principal--title">
                            <p className="principal--title__estilos">
                                Somos <span className="title--brand" >Ribereño Cueros_</span>
                            </p>
                            <p className="principal--title__estilos">
                                Artículos Personalizables
                            </p>
                            <p className="principal--title__estilos">
                                100% Hecho a Mano
                            </p>
                        </div>
                        
                        <Carrousel/>
                    </div>
                </div>
            </div>
    )
}

export default Principal