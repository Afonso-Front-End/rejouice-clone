import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"
gsap.registerPlugin(ScrollTrigger, SplitText)

import "./header.css"
import video from "./video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Menu from "../menu/Menu"

const Header = () => {
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
            timeline.from(rejouiceChars, {
                yPercent: 250,
                duration: 1,
                stagger: 0.05,
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
                delay: -1.2
            })
        })

      

        return () => {
            contexto.revert()
        };
    }, []);

    return (
        <div className="header-video">
            <Menu/>
            <div id="overlay">
                <span>Tomorrow’</span>
                <span>Brands,</span>
                <span>Today™</span>
            </div>
            <video className="video-back" src={video} autoPlay muted loop playsInline></video>
            <header>
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
            
        </div>
    )
}

export default Header;