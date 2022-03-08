import React from 'react';
import Button from './Button'
const Footer1 = ()=>{
    return (
        <>
            <div className="news  bg-gray-200 w-fit md:w-fit min-w-full lg:min-w-full  ">
                <div className=' py-10 md:min-w-min  '>
                    <h1 style={{color:'#124581'}} className='font-bold ml-auto  text-3xl text-center my-3 md:text-4xl lg:text-4xl  lg:tracking-[2.5px] '>Subscribe To Our Newsletter</h1>
                    <p className=' text-center w-screen text-sm m-auto font-thin sm:text-sm sm:w-1/2 sm:mx-auto md:text-md md:w-1/2 md:mx-auto  lg:text-lg lg:text-justify  lg:mx-auto lg:w-[39vw]   '>Want the latest and the greatest from our blog straight to your inbox? Check your details and get weekly updates. Content to be added afterwards..(DUMMY TEXT)</p>

                    <div className=' flex justify-center items-center flex-col my-6 md:flex-row lg:flex-row '>
                     <Button/>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Footer1;