import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const posts = await getAllPosts();
  return (
    <main className='container mx-auto mt-8 my-5'>
      <h1 className='text-3xl text-black text-center mb-2 font-semibold'>Welcome to Our Blog Viewer</h1>
      <p className='w-[90%] mx-auto text-center font-medium text-gray-500 mb-8 lg:mb-10'>
        Discover engaging blog posts and explore the details of each one.
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 px-4 md:px-0'>
        {posts.map(post => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div
              className='p-4 bg-white border rounded-md shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out h-48 sm:h-44'
            >
              <p className='text-lg mb-2 font-semibold text-blue-950'>
                Post ID: {post.id}
              </p>
              <h3 className=' font-medium text-blue-950'>
                {post?.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
};

export default Home;