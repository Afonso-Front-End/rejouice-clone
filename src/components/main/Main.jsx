import "./main.css"
import video1 from "../../video/Website-homepage-Work-01_1.mp4"
import video2 from "../../video/Website-homepage-Work-02_1.mp4"
import video3 from "../../video/Website-homepage-Work-03_1.mp4"

import video1Img from "../../assets/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+(1).avif"
import video2Img from "../../assets/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.avif"
import video3Img from "../../assets/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692 (1).avif"

import videoBack from "../../video/RJ-BALL-BLUE-ORANGE-scaled.webm"

import logoCardRivia from "../../assets/Rivian.svg"
import logoCardOura from "../../assets/logo-oura-card-2.svg"
import logoCardMoxion from "../../assets/logo-moxion-card-3.svg"

import image_slider_1 from "../../assets/slider/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.avif"
import image_slider_2 from "../../assets/slider/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.avif"
import image_slider_3 from "../../assets/slider/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+(38).avif"
import image_slider_4 from "../../assets/slider/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+(39).avif"
import image_slider_5 from "../../assets/slider/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.avif"

const Main = () => {
    return (
        <div className="container-main">
            <main className="content-main">

                <div className="container-section">
                    <div className="content-section">
                        <div className="section-span-1">
                            <span>Tomorrow’s Brands, Today™</span>
                            <span>Paris / San Diego</span>
                        </div>
                        <div className="section-span-2">
                            <span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
                                are a venture firm and digital agency. Our mission
                                is to transform founders' visions into remarkable
                                brands. Choose traditional compensation or an equity
                                offset through our Venture Model — your vision, your
                                decision.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="section-p">
                            <p><span>Agency & Venture</span><button className="moedels">Models</button><span className="rotate">↵</span></p>
                        </div>
                        <div className="section-h2">
                            <h2><a href="#">Explorer our services <br /> and engagement models</a></h2>
                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="container-card-video">
                            <div className="top-cards">
                                <span>Transforming visions into brands.</span>
                                <a href="#">↵ See the work</a>
                            </div>
                            <div className="content-card-video">
                                <div className="card-video-1 card-video"><video src={video1} autoPlay></video><img src={video1Img} alt="" /><span className="title-img"><img src={logoCardRivia} alt="" id="revian" /></span></div>
                                <div className="card-video-2 card-video"><video src={video2} autoPlay></video><img src={video2Img} alt="" /><span className="title-img"><img src={logoCardOura} alt="" /></span></div>
                                <div className="card-video-3 card-video"><video src={video3} autoPlay></video><img src={video3Img} alt="" /><span className="title-img"><img src={logoCardMoxion} alt="" /></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="section-span-1">
                            <span>We operate on a simple philospphy: <br /><span>Quality over quantfy.</span> </span>

                        </div>
                        <div className="section-span-2">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We partner with up to 5 clients each year. This allows intense focus on the transformation and launch of your brand by our very best team, which is the only team we have.  We specialize in working with startups that are revolutionizing their industries.</span>
                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="container-scroll-blur">
                            <div className="video-back">
                                <video src={videoBack} autoPlay muted loop playsInline></video>
                                <div className="loader">
                                    <div className="circle">
                                        <div className="seats">
                                            <h1>2 seats</h1>
                                            <p>available for 2024</p>
                                        </div>
                                    </div>
                                    <div className="dot"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="section-span-1">
                            <span>Strategy & emotion. <br /><span>you need both.</span> </span>
                        </div>
                        <div className="section-span-2">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data matters, yet it’s the emotion that drives buying decisions. We don’t believe in ‘one size fits all.’ We craft unique brand experiences that deeply resonate with your audience and boost your KPIs..</span>
                        </div>
                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">

                        <div className="title-slider">
                            <p>Get in touch.</p>
                            <a href="#"><span>↵</span>Contact</a>
                        </div>
                        <div className="container-slider-image">
                            <div className="content-slider-image">
                                <img src={image_slider_1} alt="" />
                                <img src={image_slider_2} alt="" />
                                <img src={image_slider_3} alt="" />
                                <img src={image_slider_4} alt="" />
                                <img src={image_slider_5} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">

                    </div>
                </div>

                <div className="container-section">
                    <div className="content-section">
                        <div className="about">
                            <p>We’re uniquely built↵</p>
                            <h2><a href="#">About us</a></h2>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Main;