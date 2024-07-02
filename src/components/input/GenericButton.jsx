import React from 'react'

const GenericButton = ({label, clickEvent}) => {
  return (
    <a
      onClick={() => clickEvent()}
      className='flex h-fit w-fit m-[0.6vw] text-white rounded-full group bg-gradient-to-tr from-purple-500 to-blue-500 cursor-pointer transition-all duration-200'
    >
      <span
        className='flex h-fit w-fit p-2 m-[-1px] rounded-full bg-gray-800 bg-opacity-100 group-hover:bg-opacity-0 transition-all duration-200'
      >
        {label}
      </span>
    </a>
  )
}

export default GenericButton