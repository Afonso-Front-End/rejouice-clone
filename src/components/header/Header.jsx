import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

import "./header.css"
import video from "../../video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
import { useEffect } from "react"
import { useLayoutEffect } from "react"
const Header = () => {
    useLayoutEffect(() => {
        var timeline = gsap.timeline();

        // timeline.from(".overlay h3", {
        //     xPercent: 40,
        //     // opacity: 0,
        //     duration: 1,
        //     stagger: 0.1,
        // });
        // timeline.to(".overlay h3", {
        //     xPercent: -10,
        //     opacity: 0,
        //     stagger: 0.3,
        // });
        timeline.fromTo("#overlay h3",
            { opacity: 0, x: 40, duration: 1, stagger: 0.1 },
            { opacity: 0, x: -10, duration: 1, stagger: 0.1, delay: 1 })

        // Cleanup function to kill the timeline when component unmounts
        return () => {
            timeline.kill();
        };
    }, []);
    return (
        <div className="header-video">
            <video src={video} autoPlay muted loop playsInline></video>
            <header>
                <nav>
                    <a>The Venture Agency.</a>
                    <a>Menu</a>
                </nav>
                <div id="header-logo">
                    <h1>rejouice</h1>
                </div>
            </header>
            <div id="overlay">
                <h3>Tomorrow’</h3>
                <h3>Brands,</h3>
                <h3>Today™</h3>
                <div className="over">
                </div>
            </div>
        </div>
    )
}

export default Header;