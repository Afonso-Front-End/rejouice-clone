import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "./app.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useRef } from "react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
const App = () => {
    const containerRef = useRef(null)
    useLayoutEffect(()=>{
        const smoother = ScrollSmoother.create({
            wrapper: containerRef.current,
            content: "#content",
            smooth: 1,
            effects: true,
        })
    },[])
    return (
        <div id="container" ref={containerRef}>
            <div id="content">
                <Header/>
                <Main/>
            </div>
        </div>
    )
}

export default App;