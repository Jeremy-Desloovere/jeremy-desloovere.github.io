import { motion } from "framer-motion"
import React from 'react';
import { fadeIn } from '../../Utils/variants';
import { Alert, AlertTitle } from "@mui/material";

const About = () => {
    return <section
        id='about'>

        <motion.div
            variants={fadeIn('right', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=''
        >

            <h2>
                A propos de moi
            </h2>
            <p
                className="text-xl md:text-2xl mb-11">
                Après une expérience enrichissante dans le monde de la relation client et dans laquelle j'ai acquis beaucoup de connaissances (Qualité, Sécurité opérationnelle, Management, Gestion de données,...), j'ai effectué en 2022 une reconversion professionnelle dans un domaine qui me passionne depuis des années, le développement web.
                Mon esprit d'analyse et mon appétence pour la programmation et le développement m'ont poussé à faire de cette passion un nouveau métier.
            </p>

            <Alert color="info" severity="info">
                <AlertTitle>Open to work</AlertTitle>
                <p className="font-bold text-xl md:text-2xl">Je suis actuellement à la recherche d'un stage, d'un emploi pour acquérir de l'expérience dans le domaine, avec une préférence pour le Front End.</p>
                <p className="text-xl md:text-2xl">(Vous êtes recruteur et vous avez la possibilité de me former sur une nouvelle techno ? Contactez-moi !)</p>
            </Alert>


        </motion.div>
    </section>;

};

export default About;
