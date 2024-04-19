import React, { useState, useEffect }  from 'react'
import Product from '../components/Products/Product';
import Navbar from '../components/Navbar/Navbar';

const UsersPage = () => {
    return (
        <div>
            <Navbar/>
            <h1><Product/></h1>
        </div>
    );
};

export default UsersPage;