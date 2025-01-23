import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async() => {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    return (
       user && isAuthenticated ? <main className='container mx-auto mt-8 my-5'>
        <h1 className='text-3xl text-center mb-2 font-semibold'>Hi, {user?.given_name}!</h1>
        <p className='w-[90%] mx-auto text-center font-medium text-gray-500 mb-8 lg:mb-10'>
        Welcome to your profile!
        </p>

    </main>: redirect('/api/auth/login')
    );
};

export default Profile;