import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Work from './Work';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#463116]'>
     
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          MOHAMED ABDOU
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          With expertise in crafting robust 
          coding solutions and creating outstanding digital experiences. 
          My primary focus revolves around the development of responsive full-stack web applications, 
          where I bring both coding prowess and design sensibilities to the forefront.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <Link to="/components/Work.jsx"> 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </Link>
          </button>
          

        </div>
      </div>
    </div>
  );
};

export default Home;