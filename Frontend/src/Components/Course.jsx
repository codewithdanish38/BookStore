import React from 'react';
import Cards from './Cards'; // Make sure to import Cards
import list from "../../public/list.json"; // Make sure this path is correct
import {Link} from 'react-router-dom'
const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-20'>
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have <span className='text-pink-500 font-bold'>You Here</span>
          </h1>
          <p className='mt-12 text-lg font-semibold'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ducimus exercitationem aperiam quidem commodi earum voluptas at numquam cum ratione cupiditate blanditiis. Eius odio maxime repudiandae pariatur non necessitatibus illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam sit veniam provident nesciunt, alias repellat quibusdam voluptate illo eius in, impedit maiores cum soluta. Cupiditate corporis ea amet quas.
          </p>
         <Link to="/">
         <button className="btn btn-secondary mt-10 hover:bg-pink-500 text-color-white duration-900">Back</button>
         </Link>
        </div>
        
        <div className='mt-12  grid grid-cols-3 '>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} /> // Ensure the correct use of parentheses
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
