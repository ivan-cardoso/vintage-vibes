import React, { useEffect } from 'react'
import scrollTop from '../../utils/scrollTop'
import "./About.css"

function About() {

    useEffect(() => {
        scrollTop()  
    }, [])

    return (
        <>
            <div className="about--container">
                <div className="container">
                    <div className="about--section--img">
                        <h2 className="section--subtitle pt-4 pb-4 " >About <span className="green"> us_</span></h2>
                        <div className="about--img--background" >
                        </div>
                    </div>
                </div>
            </div>

            <div className="white--bg pt-5 pb-5">
                <div className="container ">
                    <div className="section--container">
                        <h3 className=" section--subtitle mb-4 ">Where & when started</h3>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="about--img--container" >
                                    <img height="auto" 
                                    alt="Old outfits"
                                    src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/11/double-denim.jpg" 
                                    className="about--img" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div>
                                    <ul>
                                        <li className="section--about--title green">
                                            <p>Oldies & Goodies</p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="about--text">
                                            Vintage Vibes is the home of vintage mens and womens clothing,
                                            vintage sportswear, vintage vinyls, vintage cameras, 
                                            vintage t-shirts and vintage jeans.<br/><br/>
                                            Vintage Vibes is the home of vintage mens and womens clothing,
                                            vintage sportswear, vintage vinyls, vintage cameras, 
                                            vintage t-shirts and vintage jeans.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 mt-4">
                                <div>
                                    <ul>
                                        <li className="section--about--title green">
                                            <p>Oldies & Goodies</p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p className="about--text">
                                            Vintage Vibes is the home of vintage mens and womens clothing,
                                            vintage sportswear, vintage vinyls, vintage cameras, 
                                            vintage t-shirts and vintage jeans.<br/><br/>
                                            Vintage Vibes is the home of vintage mens and womens clothing,
                                            vintage sportswear, vintage vinyls, vintage cameras, 
                                            vintage t-shirts and vintage jeans.<br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 mt-4">
                                <div className="about--img--container" >
                                    <img height="auto" 
                                    alt="Old guy"
                                    src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/11/pink-hair-military-coat.jpg" 
                                    className="about--img" />
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
