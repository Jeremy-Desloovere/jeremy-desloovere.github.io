import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";


const Social = () => {
    let circleClasses = "p-2 rounded-full opacity-60 hover:opacity-100 ";

    return (
        <div className="flex justify-around items-center w-full md:w-3/5">
            <a
                href="https://www.linkedin.com/in/jeremy-desloovere/"
                style={{ background: "#3B5998" }} className={circleClasses}>
                <FiLinkedin />
            </a>
            <a
                href="https://github.com/Jeremy-Desloovere/"
                style={{ background: "#000" }} className={circleClasses}>
                <FiGithub />
            </a>
            <a
                href="https://twitter.com/JeremDesloovere"
                style={{ background: "#1DA1F2" }} className={circleClasses}>
                <FiTwitter />
            </a>
        </div>
    )
};
export default Social;