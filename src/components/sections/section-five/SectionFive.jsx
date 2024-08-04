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


                            <div className="loader-circle-back">
                                <div className="loader-circle-front"></div>
                                <div className="seats">
                                <h1>2 seats</h1>
                                <p>available for 2024</p>
                            </div>
                            </div>
                            <svg class="abs tl:0 fit transform rotate:0 $$8$$ (.in-view):tween:all,2.8s,easeOutSlow (.in-view):rotate:216deg" viewBox="0 0 100 100">
                                <circle cx="50" cy="1" r="1" fill="#fff"></circle>
                            </svg>
                            <div className="circle"></div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SectionFive;