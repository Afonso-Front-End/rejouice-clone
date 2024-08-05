import "./SectionFour.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionFour = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-section-four",
                    start: "top 105%",
                    end: "bottom 145%",
                    scrub: 2,
                }
            });
            timeline.fromTo(".content-section-four .div-span-1 span p", { y: 200, }, { y: 0, duration: 2, stagger: 0 })
            timeline.fromTo(".content-section-four .div-span-2 span p", { y: 150, }, { y: 0, duration: 2, stagger: 0 })
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <div className="container-section-four">
            <div className="content-section-four">
                <div className="div-span-1">
                    <span>
                        <p>
                            We operate on a simple philospphy:
                        </p>
                    </span>
                    <span>
                        <p>  Quality over quantfy.</p>
                    </span>
                </div>
                <div className="div-span-2">
                    <span>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            We partner with up to 5 clients each year.
                        </p>
                    </span>
                    <span>
                        <p>This allows intense focus on the transformation</p>
                    </span>
                    <span>
                        <p>and launch of your brand by our very best team,</p>
                    </span>
                    <span>
                        <p>
                            which is the only team we have.  We specialize in
                        </p>
                    </span>

                    <span>
                        <p>
                            working with startups that are revolutionizing
                        </p>
                    </span>

                    <span>
                        <p>their industries.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SectionFour;