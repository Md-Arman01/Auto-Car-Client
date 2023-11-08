import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowWorks from "./HowWorks";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Auto Car</title>
            </Helmet>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;