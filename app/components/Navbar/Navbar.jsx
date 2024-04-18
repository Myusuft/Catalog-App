import React from 'react';
import Image from 'next/image';
import './Navbar.css';

const Navbar = () => {
    const nav = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',

        height: '80px',
        padding: '0 20px',
    };

    return (
        <div className='nav' style={nav}>
            <div className="logo">
                <Image src="/next.svg" alt="logo" />
                {/* <img src="/logo192.png" alt="" /> */}
            </div>
            <div className="navList">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
