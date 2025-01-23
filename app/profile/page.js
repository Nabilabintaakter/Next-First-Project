import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <main className='container mx-auto mt-8 my-5'>
            <h1 className='text-3xl text-center mb-2 font-semibold'>Hi, {user.given_name}!</h1>
            <p className='w-[90%] mx-auto text-center font-medium text-gray-500 mb-8 lg:mb-10'>
            Welcome to your profile!
            </p>

        </main>
    );
};

export default Profile;