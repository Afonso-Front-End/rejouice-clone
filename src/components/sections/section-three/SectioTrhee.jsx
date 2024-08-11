import "./SectioTrhee.css"
import { Link } from 'react-router-dom';

import video1 from "./video/Website-homepage-Work-01_1.mp4"
import video2 from "./video/Website-homepage-Work-02_1.mp4"
import video3 from "./video/Website-homepage-Work-03_1.mp4"

import video1Img from "./image/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+(1).avif"
import video2Img from "./image/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.avif"
import video3Img from "./image/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692 (1).avif"

import logoCardRivia from "./icon/Rivian.svg"
import logoCardOura from "./icon/logo-oura-card-2.svg"
import logoCardMoxion from "./icon/logo-moxion-card-3.svg"
import { useRef } from "react"

import gsap from "gsap"
const SectioTrhee = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    const handleMouseEnter = (video) => {

        if (video) {
            gsap.to(video, {
                onStart: () => {
                    video.current.play()
                    video.current.currentTime = 0
                }
            })
        }
    };

    return (
        <div className="container-section-trhee">
            {/* <div className="loader-card"></div> */}
            <div className="content-section-trhee">

                <div className="container-card-video">

                    <div className="div-span-1">
                        <span>Transforming visions into brands.</span>
                        <a href="#">↵ See the work</a>
                    </div>

                    <div className="content-card-video">
                        <Link to="/rivian">

                            <div className="card-video-1 card-video"
                                onMouseEnter={() => handleMouseEnter(videoRef1)}>
                                <video
                                    src={video1}
                                    loop
                                    muted
                                    ref={videoRef1}>
                                </video>
                                <img
                                    src={video1Img}
                                    alt="" />
                                <span>
                                    <img src={logoCardRivia} alt="" />
                                </span>
                            </div>

                        </Link>
                        <div className="card-video-2 card-video"
                            onMouseEnter={() => handleMouseEnter(videoRef2)}>
                            <video
                                src={video2}
                                loop
                                muted
                                ref={videoRef2}
                            >
                            </video>
                            <img
                                src={video2Img}
                                alt="" />
                            <span>
                                <img src={logoCardOura} alt="" />
                            </span>
                        </div>
                        <div className="card-video-3 card-video"
                            onMouseEnter={() => handleMouseEnter(videoRef3)}>
                            <video src={video3}
                                loop
                                muted
                                ref={videoRef3}
                            >
                            </video>
                            <img
                                src={video3Img}
                                alt="" />
                            <span>
                                <img src={logoCardMoxion} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default SectioTrhee;