import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowWorks from "./HowWorks";
import AboutUs from "./AboutUs";


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
        </div>
    );
};

export default Home;