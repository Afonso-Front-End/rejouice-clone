import "./footer.css"
const Footer = () => {
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
                        <h1>rejouice</h1>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer;