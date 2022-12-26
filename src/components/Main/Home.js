import React from 'react';
import { Outlet } from 'react-router-dom';
import TeacherPanal from '../teacherPanal/TeacherPanal';
import CarouselMain from './CarouselMain';
import Marquee from './Marquee';
import Menu from './Menu';
import OurSuccess from './OurSuccess';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Marquee></Marquee>
            <CarouselMain></CarouselMain>
            <TeacherPanal/>
            <OurSuccess/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;