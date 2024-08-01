import "./header.css"
import video from "../../video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
const Header = () => {
    return (
        <div className="header-video">
            <video src={video} autoPlay muted loop playsInline></video>
            <header>
                <nav>
                    <a>The Venture Agency.</a>
                    <a>Menu</a>
                </nav>
                <div id="header-logo">
                    <h1>rejouice</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;