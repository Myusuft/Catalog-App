import React, { useState, useEffect }  from 'react'
import Product from '../components/Products/Product';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';

const UsersPage = () => {
    return (
        <div>
            <Navbar/>
            <div><Categories></Categories></div>
            <h1><Product/></h1>
        </div>
    );
};

export default UsersPage;