import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import "./SectionAbout.css"

const SectionAbout = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-section-about",
                    start: "top 90%",
                    end: "bottom 135%",
                    scrub: 2,
                }
            });
            timeline.fromTo(".content-section-about .about span h2", { y: 200, }, { y: 0, duration: 0.05, stagger: 0 })
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <div className="container-section-about">
            <div className="content-section-about">
                <div className="about">
                    <p>We’re uniquely built↵</p>

                    <span>
                        <h2><a>About us</a></h2>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SectionAbout;