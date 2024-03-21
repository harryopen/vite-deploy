import React from 'react';

function Container() {
  return (
    <div className='flex  items-center'>
      <div className=' w-full flex flex-col items-center'>
        <h2>Task of the day</h2>
        <div className='h-80 w-[50%] border-2 bg-black rounded-lg'></div>
      </div>
    </div>
  );
}

export default Container;
