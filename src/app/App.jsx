import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import "./app.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useRef } from "react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
const App = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: containerRef.current,
            content: "#content",
            smooth: 1,
            effects: true,
        })

        const cursor = document.querySelector("#play-reel")
        const headerVideo = document.querySelector(".header-video")
        const seasonTwo = document.querySelector(".season-two")
        gsap.fromTo(cursor,
            {zIndex: 0, scale: 0,},
            {zIndex: 1, delay: 3.5, scale: 1}
        )
        window.addEventListener("mousemove", (event) => {
            gsap.to(cursor, {
                x: event.x,
                y: event.y,
            })
        })

        return () => {
            headerVideo.removeEventListener("mousemove", () => { });
        }

    }, [])


    return (
        <div id="container" ref={containerRef}>
            <div id="play-reel"><span>Play Reel</span></div>
            <div id="content">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App;