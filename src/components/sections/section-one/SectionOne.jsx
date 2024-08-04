import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText)

import "./SectionOne.css"

const SectionOne = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const animacaoComum = (classe, yValor) => {
                return {
                    y: yValor,
                    duration: 0.05,
                    stagger: 0.0,
                    scrollTrigger: {
                        trigger: classe,
                        start: "top 105%",
                        end: "bottom 100%",
                        scrub: 1.7
                    }
                };
            };

            const timeline = gsap.timeline();
            timeline.from(".div-span-1 span p", animacaoComum(".div-span-1 span", 120));
            timeline.from(".div-span-2 span p", animacaoComum(".div-span-2 span", 150));
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <div className="container-section-one" >
            <div className="content-section-one">

                <div className="div-span-1">
                    <span>
                        <p>Tomorrow’s Brands, Today™</p>
                    </span>
                    <span>
                        <p>Paris / San Diego</p>
                    </span>
                </div>

                <div className="div-span-2">
                    <span>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
                            are a venture firm and digital agency. Our
                        </p>
                    </span>
                    <span>
                        <p>
                            mission is to transform founders' visions into
                        </p>
                    </span>
                    <span>
                        <p>
                            remarkable brands. Choose traditional
                            compensation or an equity offset through our
                        </p>
                    </span>
                    <span>
                        <p>Venture Model — your vision, your decision.</p>
                    </span>
                </div>

            </div>
        </div>
    )
}
export default SectionOne;