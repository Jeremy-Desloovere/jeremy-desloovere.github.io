import React from "react";

const Header = () => {


    return (
        <header

            className='mb-2 lg:mb-0' >
            <div className='container flex justify-between '>
                <div className="flex-col uppercase">
                    <h1>Jeremy Desloovere</h1>
                </div>
                <button
                    className="btn">
                    Contact
                </button>
            </div>
        </header>

    )
}

export default Header;
