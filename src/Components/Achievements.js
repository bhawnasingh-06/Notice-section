import React from 'react';
import img1 from '../images/image 10.png'
import img2 from '../images/image 14.png'
import img3 from '../images/image 9.png'
import img4 from '../images/image 8.png'
const Achievements = () => {
    return (
        <div className='sm:flex-col md:flex md:flex-row lg:flex-row   sm:p-4 justify-between sm:gap-4 items-center bg-indigo-900 md:px-32 md:py-20'>
            <div className='text-center text-white'>
               <img className='mx-auto' src={img2} alt="" /> 
               <h3 className='font-bold text-2xl'>768</h3>
               <h3>COURSES PUBLISHED</h3>
            </div>
            <div className='text-center text-white'>
               <img className='mx-auto' src={img1} alt="" /> 
               <h3 className='font-bold text-2xl'>768</h3>
               <h3>COURSES PUBLISHED</h3>
            </div>
            <div className='text-center text-white'>
               <img className='mx-auto' src={img3} alt="" /> 
               <h3 className='font-bold text-2xl'>768</h3>
               <h3>COURSES PUBLISHED</h3>
            </div>
            <div className='text-center text-white'>
               <img className='mx-auto' src={img4} alt="" /> 
               <h3 className='font-bold text-2xl'>768</h3>
               <h3>COURSES PUBLISHED</h3>
            </div>
        </div>
    );
};

export default Achievements;