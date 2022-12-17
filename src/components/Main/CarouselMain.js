import React from 'react';
import Carousel from './Carousel';
import img1 from '../../images/bannar1.png'
import img2 from '../../images/bannar2.jpg'
import img3 from '../../images/bannar3.jpg'


const CarouselMain = () => {
    const carouselData = [
        {   
            prev:3,
            id:1,
            next:2,
            image: img3,
            info:'Our Nakai Hat Branch'
            
        },
        {   
            prev:1,
            id:2,
            next:3,
            image: img2,
            info:'Al time in Top for Result'
        },
        {   
            prev:2,
            id:3,
            next:1,
            image: img1,
            info:'Controlled by CC camera in 24Hour'
        },
    ]
    return (
        <div  className="carousel w-full hidden lg:flex">
            {
                carouselData.map(slide=><Carousel
                    key={slide.id}
                    slide={slide}
                ></Carousel>)
            }
        </div>
    );
};

export default CarouselMain;