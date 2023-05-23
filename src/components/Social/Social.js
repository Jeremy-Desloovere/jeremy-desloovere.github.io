import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";


const Social = () => {
    let circleClasses = "p-3  rounded-full opacity-80  transition ease-in-out  hover:-translate-y-1 hover:scale-125 duration-500 ";

    return (
        <div className="flex justify-around items-center w-full md:w-3/5 md:h-20">
            <a
                href="https://www.linkedin.com/in/jeremy-desloovere/"
                target="_blank"
                style={{ background: "#3B5998" }} className={circleClasses} rel="noreferrer">
                <FiLinkedin />
            </a>
            <a
                href="https://github.com/Jeremy-Desloovere/"
                target="_blank"
                style={{ background: "#000" }} className={circleClasses} rel="noreferrer">
                <FiGithub />
            </a>
            <a
                href="https://twitter.com/JeremDesloovere"
                target="_blank"
                style={{ background: "#1DA1F2" }} className={circleClasses} rel="noreferrer">
                <FiTwitter />
            </a>
        </div>
    )
};
export default Social;