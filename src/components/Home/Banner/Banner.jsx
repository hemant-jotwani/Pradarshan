import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/print.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Pradarshan</h1>
                    <p>
                    E-COMMERCE STORE AND CONTENT UNIFIED <br></br>
                    This Prototype was made by Hemant Jotwani in the final year capstone project BIT DURG<br></br>
                    Github links of Frontend and Backend are below.<br></br>
                    </p>
                    <div className="ctas">
                        <div className="banner-cta"><a href="https://github.com/hemant-jotwani/pradarshan"> FrontEnd </a> </div>
                        <div className="banner-cta v2"><a href="https://github.com/hemant-jotwani/Pradarshan-api"> Backend</a></div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
        </div>
    );
};

export default Banner;
