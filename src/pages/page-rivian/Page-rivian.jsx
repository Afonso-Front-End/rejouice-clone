import "./Page-rivian.css"

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText)

import wrapper from "./image/9b79ca3d-8175-43c6-88e9-f2734a8d3650_rivian.avif"

const PageRivian = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper-rivian",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.7,
                    markers: true
                }
            });
            gsap.fromTo(".wrapper-rivian-text span p", { y: 150, }, { y: 0, duration: 1, stagger: 0.05 })
            gsap.fromTo(".wrapper-rivian img", { scale: 2, duration: 2 }, { scale: 1, duration: 2 })
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <div className="container-rivian">
            <div className="content-rivian">

                <div className="wrapper-rivian">
                    <div className="wrapper-rivian-img"></div>
                    <img src={wrapper} alt="" />
                    <div className="wrapper-rivian-text">
                        <span><p>vehicles Made for the</p></span>
                        <span><p>Planet. Preserving the</p></span>
                        <span><p>natural word for</p></span>
                        <span><p>generations tom come</p></span>
                    </div>
                </div>

                <section className="visit-rivian">
                    <div className="left-visit-rivian">
                        <ul>
                            <p>Services:</p>

                            <li>Strategy.</li>
                            <li>Design.</li>
                            <li>Development.</li>
                            <li>Content Creation.</li>
                        </ul>
                    </div>
                    <div className="right-visit-rivian">
                        <span>
                            We partnered with Rivian to create the very <br />
                            beginning of their brand and digital footprint. Our <br />
                            goal was to deploy a visual identity that <br />
                            exemplified the innovation, experience, and earth-<br />
                            driven mission of their business. We worked <br />
                            closely with the founding team to build <br />
                            anticipation for the debut of their Electric <br />
                            Adventure Vehicles and drive pre-orders ($1.8 <br />
                            billion worth, not too shabby), but also captivate <br />
                            their investors, the media, and the public in the <br />
                            Rivian revolution. From there, the brand evolved <br />
                            and it's been a beautiful partnership.
                        </span>
                        <p>→ Visit Rivian's website</p>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default PageRivian;