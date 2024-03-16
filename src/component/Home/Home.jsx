import BestDeal from '../BestDeal/BestDeal'
import Featured from '../Featured/Featured'
import Footer from '../Footer/Footer'
import FunFacts from '../FunFacts/FunFacts'
import Hero from '../Hero/Hero'
import HomeContact from '../HomeContact/HomeContact'
import PropertiesHome from '../PropertiesHome/PropertiesHome'
import Video from '../Video/Video'
export default function Home() {

    return (
        <div>
            <Hero />
            <Featured />
            <Video />
            <FunFacts />
            <BestDeal />
            <PropertiesHome />
            <HomeContact />
            <Footer />
        </div>
    )
}
