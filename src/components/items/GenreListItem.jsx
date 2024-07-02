import React from 'react'

const GenreListItem = ({name, id, isSelected, handleClick}) => {

  return (
    <a 
      onClick={() => handleClick()}
      className={`flex h-fit w-fit m-[0.6vw] rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 cursor-pointer group transition-colors duration-200`}
    >
      <span className={`flex h-fit w-fit p-2 rounded-full bg-gray-800 bg-opacity-100 m-[-1px] group-hover:bg-opacity-50 ${isSelected && 'bg-gradient-to-tr from-purple-500 to-blue-500'} transition-all duration-200`}>
        {name}
      </span>
    </a>
  )
}

export default GenreListItem