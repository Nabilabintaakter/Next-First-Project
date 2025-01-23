import getAllPosts from '@/lib/getAllPosts';
import React from 'react';

const Home = async () => {
  const posts = await getAllPosts();
  return (
    <main className='container mx-auto my-5'>
      <h1 className='text-3xl text-center mb-5'>Welcome to Our Blog Viewer</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 px-4 md:px-0'>
        {posts.map(post => (
          <div
            className='p-4 bg-white border rounded-md shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out'
            key={post.id}
          >
            <p className='text-lg mb-2 font-semibold text-blue-950'>
              Post ID: {post.id}
            </p>
            <h3 className=' font-medium text-blue-950 mb-2 line-clamp-2'>
              {post?.title}
            </h3>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Home;