import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = ({ slide }) => {
  const {prev,next,id,image,info} = slide;
  console.log('slide', slide);
  //see daynamic carousel in 66-4
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img mx-auto'>
        <img style={{width:'1200px',height:'600px'}} src={image} alt="" className="w-85 mx-auto rounded-xl" />
      </div>

      <div className="absolute flex justify-between transform translate-x-1/4 left-5 right-5 top-1/2">
        <h1 className='text-4xl text-warning font-bold' data-aos="fade-right" data-aos-duration='2000'>{info}</h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};
AOS.init();
export default Carousel;