import { useEffect } from "react"
import "./SectionFive.css"
import videoBack from "./video/RJ-BALL-BLUE-ORANGE-scaled.webm"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)
const SectionFive = () => {
    useEffect(() => {
        var circle = document.querySelector('.circle-container__progress');
        var radius = circle.value;
        var circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }
    

        gsap.to(circle, {
            duration: 2,
            strokeDashoffset: "130",
            scrollTrigger: {
                trigger: ".content-section-five",
                start: "top 60%",
                end: "bottom bottom",
                onEnter: () => {
                    console.log("enter")
                },
            }
        })
        gsap.to(".pointer", {
            rotate: "298deg",
            duration: 2,
            scrollTrigger: {
                trigger: ".content-section-five",
                start: "top 60%",
                end: "bottom bottom",
            }
        })
        return () => { }
    }, [])

    return (

        <div className="container-section-five">
            <div className="content-section-five">
                <div className="div-blur">

                    <div className="video-blur">
                        <video src={videoBack} autoPlay muted loop playsInline></video>
                        <div className="loader">
                            <div className="seats">
                                <span><p>2</p>seats</span>
                                <span>avable for 2024</span>
                            </div>
                            <div className="circle">
                                <svg className="circle-container abs tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="49"
                                        style={{ stroke: "#fff", strokeWidth: "0.25" }}
                                        fill="none"
                                        className="circle-container__background o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:431.20000000000005">
                                    </circle>

                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="49"
                                        style={{ stroke: "#fff", strokeWidth: "0.25" }}
                                        fill="none"
                                        className="circle-container__progress $$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:123.2">
                                    </circle>
                                </svg>
                                <svg className="abs tl:0 fit transform rotate:0 $$8$$ (.in-view):tween:all,2.8s,easeOutSlow (.in-view):rotate:216deg pointer" viewBox="0 0 100 100">
                                    <circle cx="50" cy="1" r="1" fill="#fff"></circle>
                                </svg>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SectionFive;