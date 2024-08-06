import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Cursor from "../components/cursor/Cursor";

import "./app.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useRef } from "react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
gsap.config({
    autoSleep: 60, // Ajuste o tempo de espera conforme necessário
    nullTargetWarn: false, // Desativa avisos sobre alvos nulos
    trialWarn: false // Desativa avisos de versão de teste (somente se aplicável)
});
const App = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: containerRef.current,
            content: "#content",
            smooth: 1,
            effects: true,
        })
    }, [])

    return (
        <div id="container" ref={containerRef}>
            {/* <Cursor/> */}
            <div id="content">
                {/* <Header /> */}
                {/* <Main /> */}
                {/* <Footer /> */}
                {/* <Cursor/> */}
            </div>
        </div>
    )
}

export default App;