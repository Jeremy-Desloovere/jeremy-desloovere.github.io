import AnimTitle from "../Animtitle/AnimTitle";
import picture from "../../assets/work.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Header = () => {
    let circleClasses = "p-2 rounded-full w-10 mx-auto opacity-60 hover:opacity-100";
    let iconStyles = { color: "white", fontSize: "1.5em" };

    return (
        <header className='py-8' id='home'>
            <div className='container mx-auto flex justify-end '>
                <div className="flex-col">
                    <img
                        className=" w-64 md:w-128 lg:w-256"
                        src={picture} alt="Jeremy's with a computer" />
                    <div className="flex justify-center items-center">
                        <span style={{ background: "#3B5998" }} className={circleClasses}>
                            <FaLinkedin style={iconStyles} />
                        </span>
                        <span style={{ background: "#000" }} className={circleClasses}>
                            <FaGithub style={iconStyles} />
                        </span>
                        <span style={{ background: "#1DA1F2" }} className={circleClasses}>
                            <FaTwitter style={iconStyles} />
                        </span>
                    </div>
                </div>


            </div>
            {/* <AnimTitle /> */}
        </header>

    )
}

export default Header;
