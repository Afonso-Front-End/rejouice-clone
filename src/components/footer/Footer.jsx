import { useGSAP } from "@gsap/react"
import "./footer.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)
const Footer = () => {

    useGSAP(() => {
        const contexto = gsap.context(() => {
            const rejouice = new SplitText("#footer-logo h1", { type: "chars" })
            const rejouiceChars = rejouice.chars

            const rejouiceR = new SplitText("#r-f", { type: "chars" })
            const rejouiceRChars = rejouiceR.chars

            var timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".content-footer",
                    start: "top 50%",
                    end: "bottom bottom",
                    scrub: 2,
                }
            });
            
            timeline.from(rejouiceChars, {
                opacity: 0,
                yPercent: -250,
                duration: 2,
                stagger: 0.05,
                delay: -1.5
            })
            // timeline.from(rejouiceRChars, {
            //     yPercent: 250,
            //     duration: 1,
            //     stagger: 0.05,
            //     // delay: -1.25
            // })
        })
        return () => {
            contexto.revert()
        };
    }, []);

    return (
        <div className="container-footer">
            <div className="content-footer">

                <footer>
                    <div className="footer-top">
                        <div className="nav-footer">
                            <div className="nav-text">
                                <span>Relax. We've got you.</span>
                                <button>Take a seat</button>
                            </div>
                            <div className="nav-lista">
                                <ul>
                                    <li>Home</li>
                                    <li>Work</li>
                                    <li>About</li>
                                    <li>Services & Models</li>
                                    <li>Contact</li>
                                </ul>
                                <ul>
                                    <li>X</li>
                                    <li>Instagran</li>
                                    <li>Linkedinx</li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-links">
                            <div>
                                <span> San Diego—California <br />Paris—France</span>
                            </div>

                            <div className="links">
                                <span>biz@rejouice.com</span>
                                <span>©2023 clone</span>
                            </div>
                        </div>
                    </div>

                    <div id="footer-logo">
                        <h1 id="rejouice-f">
                            <span>r</span>
                            <span>e</span>
                            <span>r</span>
                            <span>o</span>
                            <span>u</span>
                            <span>i</span>
                            <span>c</span>
                            <span>e</span>
                        </h1>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer;