import React from "react";

import Wrapper from "./Wrapper";
import lk from "../assets/linkedin.png";
import { scrollTo } from "../helper";
import gh from "../assets/github.png";
import be from "../assets/behance.png"

const Footer = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                        <a href="https://github.com/subhwhoo">
                            <img src={gh} alt="" className="w-[18px]" />
                            </a>
                        </div>
                        <a href="https://github.com/subhwhoo"><div>Github/Subhwhoo</div></a>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/subhwhoo/">
                            <img src={lk} alt="" className="w-[18px]" />
                            </a>
                        </div>
                        <a href="https://www.linkedin.com/in/subhwhoo/"><div>Linkedin/Subhwhoo</div></a>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                        <a href="https://www.behance.net/ghostscar">
                            <img src={be} alt="" className="w-[18px]" />
                            </a>
                        </div>
                        <a href="https://www.behance.net/ghostscar"><div>Behance/Subhwhoo</div></a>
                    </div>
                    <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
