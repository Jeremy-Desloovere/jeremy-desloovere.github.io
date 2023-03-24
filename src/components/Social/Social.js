import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";


const Social = () => {
    let circleClasses = "p-2 rounded-full opacity-60 hover:opacity-100 ";

    return (
        <div className="flex justify-around items-center">
            <span style={{ background: "#3B5998" }} className={circleClasses}>
                <FiLinkedin />
            </span>
            <span style={{ background: "#000" }} className={circleClasses}>
                <FiGithub />
            </span>
            <span style={{ background: "#1DA1F2" }} className={circleClasses}>
                <FiTwitter />
            </span>
        </div>
    )
};
export default Social;