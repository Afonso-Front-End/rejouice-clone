import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"
import { FaPlay } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger, SplitText)

import "./header.css"
import video from "./video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useEffect } from "react"

const Header = () => {
    const videoRef = useRef(null)
    useGSAP(() => {
        const overlayNone = () => {
            gsap.to("#overlay", { display: "none" })
        }

        const contexto = gsap.context(() => {
            const rejouice = new SplitText("#header-logo span", { type: "chars" })
            const rejouiceChars = rejouice.chars

            const rejouiceR = new SplitText("#r", { type: "chars" })
            const rejouiceRChars = rejouiceR.chars

            var timeline = gsap.timeline();
            timeline.from("#overlay span", {
                xPercent: 50,
                delay: 1,
                opacity: 0,
                duration: 1,
                stagger: 0.05
            })
            timeline.to("#overlay span", {
                xPercent: -10,
                duration: 0.3,
                stagger: 0.1,
                opacity: 0
            })
            timeline.from(".text-header-a a", {
                xPercent: 40,
                opacity: 0,
                stagger: 0.05,
                duration: 1,
            })
            timeline.from(rejouiceChars, {
                yPercent: 250,
                duration: 1,
                stagger: 0.05,
                delay: -1.5
            })
            timeline.to("#overlay", {
                opacity: 0,
                ease: "none",
                delay: -1,
                onComplete: () => {
                    overlayNone()
                }
            })
            timeline.from(rejouiceRChars, {
                yPercent: -250,
                duration: 1,
                stagger: 0.05,
                delay: -1.4
            })
        })

        const videoCurrent = videoRef.current;
        if (videoCurrent) {
            videoCurrent.currentTime = 1.5;
            videoCurrent.play();
        }

        return () => {
            contexto.revert()
        };
    }, []);

    const timelineMenu = gsap.timeline({
        onStart: () => {
            document.body.style.overflow = 'hidden';
        },
    })


    const openMenu = () => {
        const timelineMenu = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = 'hidden';
            },
        })
        timelineMenu.to("menu",
            { clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", delay: 0, duration: 1, ease: "power4.inOut" },
        );
    }
    const closeMenu = () => {
        const timelineMenu = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = 'auto';
            },
        })
        timelineMenu.to("menu",

            { clipPath: " polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", delay: 0, duration: 1, ease: "power4.inOut" },
        );
    }
    return (
        <div className="header-video">
            <div id="overlay">
                <span>Tomorrow’</span>
                <span>Brands,</span>
                <span>Today™</span>
            </div>
            <video className="video-back" src={video} autoPlay muted loop playsInline></video>
            <header>
                <nav>
                    <div className="text-header-a">
                        <a id="header-a">The</a>
                        <a id="header-a">Venture</a>
                        <a id="header-a">Agency.</a>
                    </div>
                    <a onClick={openMenu}>Menu</a>
                </nav>
                <div id="header-logo">
                    <h1 id="rejouice">
                        <span>r</span>
                        <span>e</span>
                        <p id="r">r</p>
                        <span>o</span>
                        <span>u</span>
                        <span>i</span>
                        <span>c</span>
                        <span>e</span>
                    </h1>
                </div>
            </header>
            <menu>
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
            </menu>
        </div>
    )
}

export default Header;