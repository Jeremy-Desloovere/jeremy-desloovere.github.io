import React from "react";

const Header = () => {


    return (
        <header className='mb-2' >
            <div className='container flex justify-between '>
                <div className="flex-col uppercase">
                    <h1>Jeremy</h1>
                    <h1>Desloovere</h1>
                </div>
                <button
                    className="active p-3">
                    Contactez-moi
                </button>



            </div>
        </header>

    )
}

export default Header;
