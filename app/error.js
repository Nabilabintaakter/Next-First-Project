'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='text-xl font-bold'>Something went wrong!</h2>
        <br />
        <button
          className='text-white px-4 py-2 rounded-md bg-green-500'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  )
}