import React from 'react'
import "./About.css"

function About() {
    return (
        <>
            <div className="about--container">
                <div className="container">
                    <div className="about--section--img">
                        <h2 className="section--subtitle pt-4 pb-4 " >Sobre <span className="green"> nosotros_</span></h2>
                        <div className="about--img--container" >
                            <img src="img/production-2.jpg" className="about--img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="white--bg pt-5 pb-5">
                <div className="container ">
                    <div className="section--container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3 className=" section--subtitle mb-4 ">Cómo y cuando comenzamos</h3>
                                <div className="about--img--container" >
                                    <img height="auto" src="img/duffle-explosion-vertical.jpg" className="about--img" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <ul>
                                        <li className="section--about--title green">
                                            <p>Productos Regionales</p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="about--text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet natus, at laboriosam tenetur molestiae rerum cupiditate corrupti enim autem optio minima.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <ul>
                                        <li className="section--about--title green">
                                            <p>Productos Regionales</p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="about--text  ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet natus, at laboriosam tenetur molestiae rerum cupiditate corrupti enim autem optio minima.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <ul>
                                        <li className="section--about--title green">
                                            <p>Productos Regionales</p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="about--text  ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet natus, at laboriosam tenetur molestiae rerum cupiditate corrupti enim autem optio minima.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
