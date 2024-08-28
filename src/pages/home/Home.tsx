import Hero from "../../components/layouts/hero/Hero";


import AboutUs from "./AboutUs";
import Discover from "./Discover";
import ProductPage from "./ProductPage";

const Home = () => {
    return (
        <div>
            
            <Hero />
            <ProductPage />
            <Discover />
            <AboutUs />
        </div>
    );
};

export default Home;