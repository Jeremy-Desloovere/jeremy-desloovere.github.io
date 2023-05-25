import React, { useState } from 'react';
import cv from "../../assets/cv.png";
import todolist from "../../assets/todolist.png";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const Portfolio = () => {

    return (

        <section
            id='portfolio'>
            <div className='max-w-screen-lg  flex flex-col  w-full h-full select-none'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline' >
                        Portfolio
                    </h2>
                    {/* <p className='py-6'>Check out some of my work right here</p> */}
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <Card
                        className=' shadow-lg shadow-verydarkcolor rounded-lg '
                    >
                        <CardHeader
                            className=' bg-darkcolor text-white '
                            title="Curriculum Vitae" />
                        <div className=' group  relative'>
                            <CardMedia
                                component="img"
                                image={cv}
                                alt="curriculum vitae"
                                className='transition duration-500 ease-in-out   group-hover:opacity-30 group-hover:saturate-0 group-hover:blur-sm'
                            />
                            <div className='absolute inset-0 flex  flex-col items-center   duration-500 justify-between opacity-0 group-hover:opacity-100'>
                                <span className='text-darkcolor font-bold text-2xl p-2 '>Mon Curriculum Vitae à jour rien que pour vous.</span>
                                <span
                                    className='bg-lightcolor font-bold p-2 w-full text-center '>
                                    HTML-CSS</span>
                            </div>
                        </div>
                        <CardActions
                            className=' bg-darkcolor text-white'
                        >
                            <a
                                className='w-1/2 px-6 py-1   '
                                href="https://jeremy-desloovere.github.io/" target="_blank" rel="noreferrer">Demo</a>
                            <a
                                className='w-1/2 px-6 py-1   '
                                href="https://github.com/Jeremy-Desloovere/Jeremy-Desloovere.github.io" target="_blank" rel="noreferrer">Code</a>
                        </CardActions>
                    </Card>

                    <Card
                        className=' shadow-lg shadow-verydarkcolor rounded-lg '
                    >
                        <CardHeader
                            className=' bg-darkcolor text-white '
                            title="Todolist Party" />
                        <div className=' group  relative'>
                            <CardMedia
                                component="img"
                                image={todolist}
                                alt="Todolist Party"
                                className='  bg-[#767676] transition duration-500 ease-in-out   group-hover:opacity-30 group-hover:saturate-0 group-hover:blur-sm'
                            />
                            <div className=' absolute inset-0 flex flex-col items-center   duration-500 justify-between opacity-0 group-hover:opacity-100'>
                                <span className='text-darkcolor font-bold text-xl p-2 '>Todolist Party est une application moderne et conviviale de gestion de tâches.
                                    Elle vise à simplifier l'organisation de vos tâches quotidiennes et à booster votre productivité.</span>
                                <span
                                    className='bg-lightcolor font-bold p-2 '>
                                    HTML-CSS-React-Zustand-Tailwind-Material UI-Framer motion</span>
                            </div>
                        </div>
                        <CardActions
                            className=' bg-darkcolor text-white '>
                            <a
                                className='w-1/2 px-6 py-1   '
                                href="https://jeremy-desloovere.github.io/Todolist-Party/" target="_blank" rel="noreferrer">Demo</a>
                            <a
                                className='w-1/2 px-6 py-1   '
                                href="https://github.com/Jeremy-Desloovere/Todolist-Party" target="_blank" rel="noreferrer">Code</a>
                        </CardActions>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
