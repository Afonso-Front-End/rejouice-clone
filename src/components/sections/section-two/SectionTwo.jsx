import "./SectionTwo.css"

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionTwo = () => {
    useGSAP(() => {
        const contexto = gsap.context(() => {
            const animacaoComum = (classe, yValor) => {
                return {
                    y: yValor,
                    duration: 1,
                    stagger: 0.0,
                    scrollTrigger: {
                        trigger: classe,
                        start: "top 105%",
                        end: "bottom 150%",
                        scrub: 1.7,
                    }
                };
            };

            const timeline = gsap.timeline();
            timeline.from(".content-section-two .div-span-1 span", animacaoComum(".content-section-two .div-span-1 span", 120));
            timeline.from(".content-section-two .div-span-2 span h2", animacaoComum(".content-section-two .div-span-2 span h2", 150));
        });

        return () => {
            contexto.revert();
        };
    }, []);
    return (
        <div className="container-section-two">
            <div className="content-section-two">
                <div className="div-span-1">
                    <span>
                        <p><span>Agency & Venture</span><button>Models</button></p>
                    </span>
                </div>
                <div className="div-span-2">
                    <span>
                        <h2><a >Explorer our services</a></h2>
                    </span>
                    <span>
                        <h2><a >and engagement models</a></h2>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SectionTwo;