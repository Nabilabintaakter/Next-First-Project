import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async() => {
    const { getUser } = getKindeServerSession();
        const user = await getUser();
    return (
        <div className='bg-blue-950 h-[64px] text-white flex items-center'>
            <div className='container mx-auto flex items-center justify-between px-4 md:px-0'>
                <Link href={'/'}><h1 className='text-xl md:text-2xl font-bold uppercase'>Blog Viewer</h1></Link>
                <ul className='flex items-center gap-2 md:gap-5'>
                    <Link href={'/'}><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium  bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Home</li></Link>
                    <Link href={'/profile'}><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Profile</li></Link>
                    {
                        user ? <LogoutLink><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Log Out</li></LogoutLink>: <LoginLink><li className='px-2 py-1 md:px-4 md:py-2 rounded-md font-medium bg-white text-blue-950 hover:bg-blue-50 transition duration-300 ease-in-out'>Login</li></LoginLink>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;