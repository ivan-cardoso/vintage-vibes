import React from "react"
import "./Carrousel.css"
import {Carousel} from "react-bootstrap"

const Carrousel = () => {
    return (
        <>
            <div className="col-12 col-md-6 carrousel--products d-flex justify-content-center">
                <Carousel  controls={false}  pause={false} className="fade show" fade={true} slide={false} >
                    <Carousel.Item interval={3000} >
                        <img
                            className="d-block carousel--imgBig "
                            src="img/chacket1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                   
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block  carousel--imgBig"
                            src="img/chacket2.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block carousel--imgMed"
                            src="img/disc1.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block carousel--imgBig"
                            src="img/chacket3.png"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block carousel--img"
                            src="img/camera1.png"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    )
}

export default Carrousel