import React from 'react';
import picture from "../../assets/pf-cv.png";

const Experience = () => {
    return (

        <section
            id='experience'
            className=' w-full md:h-screen'
        >
            <div className='max-w-screen-lg  flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline' >
                        Portfolio
                    </h2>
                    {/* <p className='py-6'>Check out some of my work right here</p> */}
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className='shadow-md shadow-verydarkcolor rounded-lg'>
                        <img
                            src={picture} alt='CV with html/css'
                            className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-verydarkcolor rounded-lg'>
                        <img
                            src={picture} alt='CV with html/css'
                            className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-verydarkcolor rounded-lg'>
                        <img
                            src={picture} alt='CV with html/css'
                            className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
