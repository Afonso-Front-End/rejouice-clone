import "./SectionSeven.css"

import image_slider_1 from "./image/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.avif"
import image_slider_2 from "./image/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.avif"
import image_slider_3 from "./image/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+(38).avif"
import image_slider_4 from "./image/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+(39).avif"
import image_slider_5 from "./image/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.avif"

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionSeven = () => {
    const sliderRef = useRef(null);


    useGSAP(() => {
        const images = sliderRef.current.querySelectorAll("img");

        const totalWidth = Array.from(images).reduce((total, img) => total + img.offsetWidth, 0);
        const clones = Array.from(images).map(img => img.cloneNode(true));

        clones.forEach(clone => sliderRef.current.appendChild(clone));

        gsap.timeline({ repeat: -1 })
            .fromTo(sliderRef.current,
                { x: 0 }, { x: -totalWidth, duration: 50, ease: "none" }
            );
    }, [])
    return (
        <div className="container-section-seven">
            <div className="content-section-seven">

                <div className="top-slider">
                    <p>Get in touch.</p>
                    <a href="#"><span>↵</span>Contact</a>
                </div>

                <div className="container-slider-image">
                    <div className="content-slider-image" ref={sliderRef}>
                        <img src={image_slider_1} alt="" />
                        <img src={image_slider_2} alt="" />
                        <img src={image_slider_3} alt="" />
                        <img src={image_slider_4} alt="" />
                        <img src={image_slider_5} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SectionSeven;