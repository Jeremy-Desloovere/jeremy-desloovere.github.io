import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquareText } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';

import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between  items-center text-2x1 text-white/50'>
                    <Link to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <BiHomeAlt
                            size={20}
                        />
                    </Link>
                    <Link to='about'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <SiAboutdotme
                            size={20}
                        />
                    </Link>
                    <Link to='skills'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <BsClipboardData
                            size={20}
                        />
                    </Link>
                    <Link to='experience'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <BiUser
                            size={20}
                        />
                    </Link>
                    <Link to='contact'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        <BsChatSquareText
                            size={20} />
                    </Link>
                </div>


            </div>
        </nav>
    )
}





export default Navbar;
