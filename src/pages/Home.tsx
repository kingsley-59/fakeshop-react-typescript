import React from "react";
import Header from "../components/Header";
import ProductsSection from "../sections/ProductsSection";
import BannerSlider from "../sections/BannerSlider";


const Home = () => {
    return (
        <>
            <Header />
            <BannerSlider />
            <ProductsSection />
        </>
    )
};

export default Home;
