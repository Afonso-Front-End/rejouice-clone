import "./SectionFive.css"
import videoBack from "./video/RJ-BALL-BLUE-ORANGE-scaled.webm"

const SectionFive = () => {
    return (

        <div className="container-section-five">
            <div className="content-section-five">
                <div className="div-blur">

                    <div className="video-blur">
                        <video src={videoBack} autoPlay muted loop playsInline></video>
                        <div className="loader">
                            <div className="circle">
                                <div className="seats">
                                    <h1>2 seats</h1>
                                    <p>available for 2024</p>
                                </div>
                            </div>
                            <div className="dot"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SectionFive;