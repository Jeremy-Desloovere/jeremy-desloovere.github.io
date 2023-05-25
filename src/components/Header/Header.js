import React from "react";
import { Link } from "react-scroll";
import { BiDownload } from 'react-icons/bi';
import CV from '../../assets/CV.pdf'


const Header = () => {


    return (
        <header
            className='mb-2 lg:mb-0  max-[320px]:mb-8 flex justify-between w-full  '
            id='home'>
            <h1>Jeremy Desloovere</h1>
            <div
                className="max-[410px]:flex justify-center">
                <a
                    className="btn  mr-3 h-1/2   "
                    href={CV}
                    download="CV_Jeremy_Desloovere.pdf">
                    CV <BiDownload
                        className="inline"
                    />

                </a>
                <Link
                    className="btn cursor-pointer h-1/2 "
                    to='contact'>
                    Contact
                </Link>
            </div>


        </header>

    )
}

export default Header;
