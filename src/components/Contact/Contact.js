import { motion } from "framer-motion"
import React from 'react';
import { fadeIn } from '../../Utils/variants';


const Contact = () => {
    return <section
        id='contact'
    >
        <motion.div
            className='container mx-auto'
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div classname='flex flex-col lg:flex-row'>
                {/* text */}
                <h2>
                    Me contacter
                </h2>
            </div>
        </motion.div>

        <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
        >

            <form className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'>
                <input
                    classname='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all'
                    type='text'
                    placeholder='Your name'
                />
                <input
                    classname='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all'
                    type='text'
                    placeholder='Your email'
                />
                <textarea
                    classname='bg-transparent border-b py-12 outline-none w-full
                placeholder:text-white focus:border-emerald-900 transition-all resize-none mb-12'
                    placeholder='Your message'></textarea>
                <button
                    className="btn">
                    Send
                </button>

            </form>
        </motion.div>


    </section>

};
export default Contact;
