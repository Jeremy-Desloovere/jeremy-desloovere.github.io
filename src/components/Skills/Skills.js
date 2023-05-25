import bootstrap from '../../assets/skills/bootstrap.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import git from '../../assets/skills/git.png'
import github from '../../assets/skills/github.png'
import javascript from '../../assets/skills/javascript.png'
import materialui from '../../assets/skills/materialui.png'
import semanticui from '../../assets/skills/semanticui.png'
import nodejs from '../../assets/skills/nodejs.png'
import tailwind from '../../assets/skills/tailwind.png'
import react from '../../assets/skills/react.png'
import php from '../../assets/skills/php.png'
import mysql from '../../assets/skills/mysql.png'

const Skills = () => {
    return (
        <section
            id='skills'>
            <h2>
                Skills
            </h2>
            <div

                className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'
            >
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={html} alt='html' className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={css} alt='css' className='w-20 mx-auto' />
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={javascript} alt='javascript' className='w-20 mx-auto' />
                    <p className='mt-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={react} alt='react' className='w-20 mx-auto' />
                    <p className='mt-4'>REACT</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={php} alt='php' className='w-20 mx-auto' />
                    <p className='mt-4'>PHP</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={mysql} alt='mysql' className='w-20 mx-auto' />
                    <p className='mt-4'>MYSQL</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={git} alt='git' className='w-20 mx-auto' />
                    <p className='mt-4'>GIT</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={github} alt='github' className='w-20 mx-auto' />
                    <p className='mt-4'>GITHUB</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={nodejs} alt='nodejs' className='w-20 mx-auto' />
                    <p className='mt-4'>NODEJS</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={bootstrap} alt='bootstrap' className='w-20 mx-auto' />
                    <p className='mt-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={materialui} alt='materialui' className='w-20 mx-auto' />
                    <p className='mt-4'>MATERIAL UI</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={semanticui} alt='semanticui' className='w-20 mx-auto' />
                    <p className='mt-4'>SEMANTIC UI</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={tailwind} alt='tailwind' className='w-20 mx-auto' />
                    <p className='mt-4'>TAILWIND</p>
                </div>
            </div>
            <div>
                <p className='mt-4'>Wireframes, User Stories, MVC, Méthode Agile: Scrum</p>
            </div>
        </section>

    )
};

export default Skills;
