
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"
import { FaPlay } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger, SplitText)
import video from "./video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
import { useRef } from "react";
import "./Menu.css"
const Menu = () => {
    const videoRef = useRef(null)
    useGSAP(() => {
        var timeline = gsap.timeline();
        timeline.from("#button-menu",{
            opacity: 0,
            delay: 3
        })
        timeline.from(".text-header-a a", {
            xPercent: 40,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            delay: -1
        })
        var videoCurrent = videoRef.current;
        if (videoCurrent) {
            videoCurrent.currentTime = 1.5;
        }
    }, [])
    const openMenu = () => {
        var videoCurrent = videoRef.current;
        if (videoCurrent) {
            videoCurrent.currentTime = 1.5;
           gsap.to(videoCurrent,{
                delay: 1.5,
                onStart: () => {
                    videoCurrent.play();
                }
           })
        }
        const timelineMenu = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = 'hidden';
            },
        })
        timelineMenu.to(".container-menu",
            { clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", delay: 0, duration: 1, ease: "power4.inOut" },
        );
    }
    const closeMenu = () => {
        var videoCurrent = videoRef.current;
        if (videoCurrent) {
           gsap.to(videoCurrent,{
                delay: 0,
                onStart: () => {
                    videoCurrent.pause();
                }
           })
        }
        const timelineMenu = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = 'auto';
            },
        })
        timelineMenu.to(".container-menu",
            { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", delay: 0, duration: 1, ease: "power4.inOut" },
        );
    }
    return (
        <menu>
            <nav>
                <div className="text-header-a">
                    <a id="header-a">The</a>
                    <a id="header-a">Venture</a>
                    <a id="header-a">Agency.</a>
                </div>
                <a onClick={openMenu} id="button-menu">Menu</a>
            </nav>

            <div className="container-menu">
                <div className="content-menu">
                    <div className="exit" onClick={closeMenu}>
                        <span>Close</span>
                    </div>
                    <div className="left">
                        <div className="left-title">
                            <span>rejoice</span>
                        </div>
                        <div className="left-video">
                            <video src={video} muted loop playsInline ref={videoRef}></video>
                            <div className="play">
                                <span>
                                    <button><FaPlay color="#EDECE7" size={10} /></button>
                                    <p>Play revel</p>
                                </span>
                                <p>-01:18</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Home</li>
                            <li>Work</li>
                            <li>Services & Models</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="menu-links">
                        <span> Tomorrow's Brands, Today.™</span>
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default Menu;