import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowWorks from "./HowWorks";
import AboutUs from "./AboutUs";
import Location from "./Location";
import DownLoadApp from "./DownLoadApp";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Auto Car</title>
            </Helmet>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            <Location></Location>
            <DownLoadApp></DownLoadApp>
            <Footer></Footer>
        </div>
    );
};

export default Home;