import React from 'react';
import { Outlet } from 'react-router-dom';
import CarouselMain from './CarouselMain';
import Marquee from './Marquee';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Marquee></Marquee>
            <CarouselMain></CarouselMain>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;