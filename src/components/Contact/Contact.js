import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';






const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    visible2: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");


    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("");
                form.current.reset();
            }, 3000);
        }
    });



    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("test")
        emailjs.sendForm('service_58ejm9j', 'template_067s7vy', form.current, '1FRgprCn7Y5RgeGQN').then(
            (result) => {
                console.log(result.text);
                setSeverity("success");
                setMessage(result.text)
            },
            (error) => {
                console.log(error.text);
                setSeverity("error");
                setMessage(error.text)

            },
        );
    }

    const handleReset = (evt) => {
        evt.preventDefault();
        form.current.reset();
    }

    return <section
        id='contact'
        className="md:flex">
        <h2

            className="md:w-1/3">
            Me contacter
        </h2>
        <svg
            width="200"
            height="200"
            viewBox="0 0 33 33"
            xmlns="http://www.w3.org/2000/svg"
            className='hidden md:inline self-center'

        >
            <motion.path
                fill="none"
                d="M5 11C6 14.3333 12.3 20.3 29.5 17.5"
                stroke="#12242A"
                variants={pathVariants}
                initial="hidden"
                animate="visible"

            />
            <motion.path
                fill="none"
                d="M24.5 12.5L29.5 17.5L25.5 23.5"
                stroke="#12242A"
                variants={pathVariants}
                initial="hidden"
                animate="visible2"
            />

        </svg>



        <form
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 mb-24 p-6 items-start'
            ref={form}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <input
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all mb-3'
                type='text'
                placeholder='Nom'
                name="nom"
                required
            />
            <input
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all mb-3'
                type='text'
                placeholder='Prénom'
                name="prenom"
                required
            />
            <input
                className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all mb-3'
                type='text'
                placeholder='Email'
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
            />
            <textarea
                className='bg-transparent border-b pb-16 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all resize-none mb-3'
                placeholder='Message'
                name="message"
                required
            ></textarea>
            <div
                className='self-center'>

                {!!message &&
                    <Alert
                        severity={severity}
                        aria-describedby="alert message"
                    >
                        {message}
                    </Alert>

                }
                <button
                    className="btn mr-8"
                    type='submit'>
                    Envoyer
                </button>
                <button
                    className="btn"
                    onClick={handleReset}>
                    Réinitialiser
                </button>
            </div>

        </form>



    </section>

};
export default Contact;

