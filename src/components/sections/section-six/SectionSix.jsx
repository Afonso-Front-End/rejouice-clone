import "./SectionSix.css"

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionSix = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-section-six",
                    start: "top 105%",
                    end: "bottom 135%",
                    scrub: 1.7,
                }
            });
            timeline.fromTo(".content-section-six .div-span-1 span p", { y: 200, }, { y: 0, duration: 0.05, stagger: 0 })
            timeline.fromTo(".content-section-six .div-span-2 span p", { y: 150, }, { y: 0, duration: 0.05, stagger: 0 })

            timeline.to(".content-section-six .div-span-1 hr", {
                width: "100%",
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".content-section-six .div-span-1",
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: 5,
                }
            })

        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <div className="container-section-six">
            <div className="content-section-six">
                <div className="div-span-1">
                    <span>
                        <p>
                            Strategy & emotion.
                        </p>
                    </span>
                    <span>
                        <p>
                            you need both.
                        </p>
                    </span>
                    <hr />
                </div>
                <div className="div-span-2">
                    <span>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Data matters, yet it’s the emotion that
                        </p>
                    </span>
                    <span>
                        <p>
                            drives buying decisions. We don’t believe in ‘one
                        </p>
                    </span>

                    <span>
                        <p>
                            size fits all.’ We craft unique brand experiences
                        </p>
                    </span>
                    <span>
                        <p>
                            that deeply resonate with your audience and
                        </p>
                    </span>
                    <span>
                        <p>boost your KPIs..</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SectionSix;