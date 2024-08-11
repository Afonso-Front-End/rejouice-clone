
import Cursor from "../components/cursor/Cursor";


import "./app.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useRef } from "react";
import { useLayoutEffect } from "react";

import PageRivian from "../pages/page-rivian/Page-rivian";

import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from "../pages/home/Home";

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

        setTimeout(() => {
            smoother.scrollTo(0, 0);
        }, 100);
    }, [])

    return (
        <BrowserRouter>
            <div id="container" ref={containerRef}>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rivian" element={<PageRivian />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;