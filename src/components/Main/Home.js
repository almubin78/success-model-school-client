import React from 'react';
import { Outlet } from 'react-router-dom';
import Carousel from './Carousel';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;