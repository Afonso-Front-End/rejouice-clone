import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import SectionFive from "../sections/section-five/SectionFive"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const Cursor = () => {
    useGSAP(() => {
        const cursor = document.querySelector("#play-reel")
        const sectionOne = document.querySelector(".container-section-one")
        const header = document.querySelector("header")
        const containerFive = document.querySelector(".container-section-five")
        const containerFour= document.querySelector(".container-section-four")
        const containerSix= document.querySelector(".container-section-six")

        gsap.fromTo(cursor,
            { zIndex: 0, scale: 0, },
            { zIndex: 1, delay: 3.5, scale: 1 }
        )

        window.addEventListener("mousemove", (event) => {
            gsap.to(cursor, {
                x: event.x,
                y: event.y,
                duration: 1,
                opacity: 1
            })
        })
        
        
        return () => {
            window.removeEventListener("mousemove", () => { });
        }
    }, [])
    return (
        <div id="play-reel"><span>Play Reel</span></div>
    )
}

export default Cursor;