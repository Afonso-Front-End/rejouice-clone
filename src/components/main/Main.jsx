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
            </main>
        </div>
    )
}

export default Main;