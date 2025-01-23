

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-blue-950 h-[64px] text-white flex items-center'>
            <div className='container mx-auto flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>NEXT CRASH</h1>
                <ul className='flex items-center gap-5'>
                    <Link href={'/'}><li className='px-4 py-2 rounded-md font-medium bg-white text-blue-950 '>Home</li></Link>
                    <Link href={'/profile'}><li className='px-4 py-2 rounded-md font-medium bg-white text-blue-950 '>Profile</li></Link>
                    <Link href={'/login'}><li className='px-4 py-2 rounded-md font-medium bg-white text-blue-950 '>Login</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;