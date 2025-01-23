import getPostDetails from '@/lib/getPostDetails';
import Link from 'next/link';
import React from 'react';

const PostDetails = async ({ params }) => {
    const { id } = params;
    const post = await getPostDetails(id);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Page Title Section */}
            <header className="pt-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className='text-3xl font-semibold text-black text-center mb-2'>Post Details</h1>
                    <p className='w-[90%] mx-auto text-center font-medium text-gray-500 mb-8 lg:mb-10'>
                    Dive into the specifics of the selected post and explore its content in detail.
                    </p>
                </div>
            </header>


            {/* Main Content */}
            <div className="container mx-auto max-w-4xl pb-8 px-4">
                <div className="bg-white p-6 shadow-lg rounded-lg border border-blue-950">
                    <p className="mb-4 text-blue-950 bg-blue-50 text-xl font-bold py-1 rounded w-fit px-5">
                        Post ID: {post.id}
                    </p>
                    {/* Post Title */}
                    <h1 className="text-2xl font-bold text-blue-900 mb-4">
                        {post.title}

                    </h1>
                    {/* Post Body */}
                    <p className="text-gray-700 leading-relaxed mb-6 ">
                        {post.body}
                    </p>

                    <span className=" text-sm text-gray-700">
                        User ID: {post.userId}
                    </span>

                    {/* Footer Section */}
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-green-500">Thank you for visiting this post!</p>
                        <Link
                            href="/"
                            className="px-4 py-2 border-[1px] bg-blue-950 text-white rounded-md shadow-md hover:bg-white hover:text-blue-950 hover:border-blue-950 transition duration-300"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
