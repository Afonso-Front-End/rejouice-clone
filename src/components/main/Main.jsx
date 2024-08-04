
import SectionOne from "../sections/section-one/SectionOne"
import SectionTwo from "../sections/section-two/SectionTwo"
import SectioTrhee from "../sections/section-three/SectioTrhee"
import SectionFour from "../sections/section-four/SectionFour"
import SectionFive from "../sections/section-five/SectionFive"
import SectionSix from "../sections/section-six/SectionSix"
import SectionSeven from "../sections/section-seven/SectionSeven"
import SectionAbout from "../sections/section-about/SectionAbout"

const Main = () => {
    
    return (
        <div className="container-main">
            <main className="content-main">
                <SectionOne />
                <SectionTwo />
                <SectioTrhee />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <SectionAbout />
            </main>
        </div>
    )
}

export default Main;