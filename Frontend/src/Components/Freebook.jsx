import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';
const Freebook = () => {
  const filterData=list.filter((data)=>data.category==='freebook');
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
   <>
   <div className='max-w-screen-2xl-container md:px-20 px-20 text-3xl font-semibold pb-4 '>
    <h1 className='text-emerald-100'>Free Offred Courses</h1>
    <p className='text-xl font-semibold px-1 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam error asperiores vitae. Ullam autem vel officia quas libero aspernatur quibusdam, facilis aut odit aliquid sed, molestiae eius veniam nihil!</p>
   </div>
   <div>
   <Slider {...settings}>
        {filterData.map((item)=>{
           return <Cards item={item} key={item.id}/>
        })}
      </Slider>
   </div>
   
   </>
  )
}

export default Freebook