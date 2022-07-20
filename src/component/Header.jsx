import React from 'react';

import '../css/side.css';
import Avatar from '../img/download.webp';


const Header = () => {
    return <>
        <div className='main'>



            <div className='header_container'>

                <div className='bar'>
                    <a href='#'><i className="fa-solid fa-bars"></i></a>
                </div>

                <div className='header_logo'>

                    <a href="#"> logo</a>
                </div>

                <div className='header_input'>
                    <input type="text" placeholder='search here' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='header_right'>
                    <div className='select_box'>
                        <select name="" id="">
                            <option> all market</option>
                        </select>
                    </div>
                    <div className='bell'>
                        <a><i className="fa-solid fa-bell"></i></a>
                    </div>
                    <div className='bell'>
                        <a><i className="fa-solid fa-message"></i></a>
                    </div>
                    <div> <a className='right_img'> <img src={Avatar} alt="" srcset="" /></a></div>

                    <div className='bell'><a><i className="fa-solid fa-ellipsis-vertical"></i></a></div>
                </div>



            </div>
        </div>
       
    </>
}

export default Header;