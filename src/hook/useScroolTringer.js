import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText)

const useScroolTringer = () => {
    useEffect(() => {
        let contexto = gsap.context(() => {
            const timeline = gsap.timeline()

            timeline.from(".section-span-2 span p", {
                y: 150,
                duration: 0.05,
                stagger: 0.0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section-span-2 span",
                    markers: true,
                    start: "top 105%",
                    end: "bottom 100%",
                    scrub: 2
                }
            })
            timeline.from(".section-span-1 span p", {
                y: 120,
                duration: 0.05,
                stagger: 0.0,
                scrollTrigger: {
                    trigger: ".section-span-1 span",
                    markers: true,
                    start: "top 105%",
                    end: "bottom 100%",
                    scrub: 2
                }
            })
        })
        return () => {
            contexto.revert()
        }
    }, [])
}
export default useScroolTringer;