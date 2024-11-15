import React from 'react'
import './Header.css'
import logo from '../Assets/brand1.png'
import { BiSearchAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { BsCart4, BsHeartFill } from 'react-icons/bs';
import callIcon from '../Assets/call icon.svg'
import { useNavigate } from 'react-router-dom';


export default function HeaderS() {

    const navigate=useNavigate();

    return (
        <div className='header-container'>

            <div className='logo-search-cont'>
                <img src={logo} alt="" onClick={()=>navigate('/')}/>
                <div className='search-cont'>
                    <BiSearchAlt className='icon' />
                    <input type="text" placeholder='Search Products' />
                </div>
            </div>

            <div className='contact-social-cont'>

                <div className='contact'>
                    <img src={callIcon} alt="" />
                    <p>Call Us <br /> <span>+009 000 000</span> </p>
                </div>

                <div className='social-icon-cont'>
                    <div className='headerIcon'>
                        <BiUserPlus className='headerIcon-size' />
                    </div>

                    <div className='headerIcon'>
                        <BsHeartFill className='headerIcon-size' />
                    </div>

                    <div className='headerIcon'>
                        <BsCart4 className='headerIcon-size' />
                    </div>
                </div>

            </div>

        </div>
    )
}
