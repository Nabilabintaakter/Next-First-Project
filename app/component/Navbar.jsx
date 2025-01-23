

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-blue-950 h-[64px] text-white flex items-center'>
            <div className='container mx-auto flex items-center justify-between px-4 md:px-0'>
                <Link href={'/'}><h1 className='text-xl md:text-2xl font-bold uppercase'>Blog Viewer</h1></Link>
                <ul className='flex items-center gap-2 md:gap-5'>
                    <Link href={'/'}><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium  bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Home</li></Link>
                    <Link href={'/profile'}><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Profile</li></Link>
                    <Link href={'/login'}><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Login</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;