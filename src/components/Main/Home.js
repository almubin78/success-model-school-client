import React from 'react';
import { Outlet } from 'react-router-dom';
import CarouselMain from './CarouselMain';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <CarouselMain></CarouselMain>
        </div>
    );
};

export default Home;