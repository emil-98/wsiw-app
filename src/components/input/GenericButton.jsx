import React from 'react'

const GenericButton = ({label, clickEvent}) => {
  return (
    <a
      onClick={() => clickEvent()}
      className='h-fit justify-center flex w-full m-[5px] text-white rounded-full group bg-gradient-to-tr from-purple-500 to-blue-500 cursor-pointer transition-all duration-200'
    >
      <span
        className='flex justify-center text-nowrap w-full p-2 m-[-1px] rounded-full bg-gray-800 bg-opacity-100 group-hover:bg-opacity-0 transition-all duration-200'
      >
        {label}
      </span>
    </a>
  )
}

export default GenericButton