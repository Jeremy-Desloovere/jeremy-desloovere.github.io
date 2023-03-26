import { motion } from "framer-motion"
import React from 'react';
import { fadeIn } from '../../Utils/variants';

const About = () => {
    return <section
        id='about'>
        <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
        >

            <h2>
                A propos de moi,
            </h2>
        </motion.div>
        <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}>

            <p
                className='md:pl-8'>
                Après une expérience enrichissante dans le monde de la relation client et dans laquelle j'ai acquis beaucoup de connaissances (Qualité, Sécurité opérationnelle, Management, Gestion de données,...), j'ai effectué en 2022 une reconversion professionnelle dans un domaine qui me passionne depuis des années, le développement web.
                Mon esprit d'analyse et mon appétence pour la programmation et le développement m'ont poussé à faire de cette passion un nouveau métier.
            </p>
        </motion.div>
    </section>;

};

export default About;
