import React from 'react';
import './hero.css'
import main from '../../assets/banner-main.png'
import { setCoin } from '../../Utilitise';

const Hero = () => {
    return (
        <div className='bg mt-4 p-8 rounded-xl space-y-4'>
            <img className='w-60 mx-auto' src={main} alt="" />
            <h1 className='text-center font-bold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-center font-medium text-base text-[#4d4c4c]'>Beyond Boundaries Beyond Limits</p>
            <div onClick={setCoin} className='bg-[#131313] w-48 p-2 rounded-xl border-2 border-[#E7FE29] mx-auto'>
                <button  id="free-credit" className='bg-[#E7FE29] w-full p-2 rounded-xl'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;