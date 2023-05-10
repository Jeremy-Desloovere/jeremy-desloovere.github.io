import React from "react";
import { Link } from "react-scroll";
import { BiDownload } from 'react-icons/bi';
import CV from '../../assets/CV.pdf'


const Header = () => {


    return (
        <header
            className='mb-2 lg:mb-0  max-[320px]:mb-8 flex justify-between  ' >
            <h1>Jeremy Desloovere</h1>
            <div
                className="max-[410px]:flex justify-center">
                <Link
                    className="btn  mr-3 "
                    href={CV}
                    download="CVJeremyDesloovere">
                    CV <BiDownload
                        className="inline"
                    />

                </Link>
                <Link
                    className="btn "
                    to='contact'>
                    Contact
                </Link>
            </div>


        </header>

    )
}

export default Header;
