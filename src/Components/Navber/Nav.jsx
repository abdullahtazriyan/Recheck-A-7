import React from 'react';
import './nav.css'
import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'

const Nav = () => {
    return (
        <div className='flex items-center justify-between'>
            <img src={logo} alt="" />
            <div className='flex gap-4 items-center'>
                <ul className='flex gap-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                <img src="" alt="" />
                
                <div className='border p-2 rounded-xl flex gap-1 items-center'><span id='avalable-coin'>0</span> Coin <img src={coin} alt="" /></div>
            </div>
        </div>
    );
};

export default Nav;