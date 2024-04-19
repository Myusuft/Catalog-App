import React from 'react';
import Image from 'next/image';
import './Navbar.css';
import Link from 'next/link';

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
                <Image src="/acl - logo.png" alt="logo" width={200} height={50} />
            </div>
            <div className="navList">
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
