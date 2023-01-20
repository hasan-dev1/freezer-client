import React from 'react';

const PageLoaderSpinner = () => {
    return (
      <div className="flex justify-center flex-col items-center h-[90vh]">
        <span className="w-24 h-24 block rounded-full border-8 border-sky-600 border-dashed animate-spin">
        </span>
        <span className='my-6 text-accent text-4xl ml-12'>Loading...</span>
      </div>
    );
};

export default PageLoaderSpinner;