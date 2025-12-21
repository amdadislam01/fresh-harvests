import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurProducts from '../../components/OurProducts/OurProducts';
import OurHarvest from '../../components/OurHarvest/OurHarvest';
import Blog from '../../components/Blog/Blog';
import OfferFruits from '../../components/OfferFruits/OfferFruits';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurProducts />
            <OurHarvest />
            <OfferFruits />
            <Testimonial />
            <Blog />
        </div>
    );
};

export default Home;