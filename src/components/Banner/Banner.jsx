import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import bannerImg from '../../assets/banner-image/banner1.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
             <img src={bannerImg} className="img-fluid absolute" width="100%"/>
                <div className="btn-go-back d-md-none" >
                    <FaArrowLeft/>
                </div>
                <div className="btn-join-group d-md-none border p-2 rounded" >
                    <button className="text-light bg-transparent border border-0">Join Group</button>
                </div>
               <div className="banner-text">
                    <h1 style={{ fontWeight: '700'}}>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>

                </div>
        </div>
    );
};

export default Banner;