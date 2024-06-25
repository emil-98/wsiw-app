import React from 'react'

const GenreListItem = ({name, id, isSelected, handleClick}) => {

  return (
    <div 
      onClick={() => handleClick()}
      className={`flex h-fit w-fit p-2 rounded-full bg-gray-500 border-2 cursor-pointer ${isSelected ? 'border-blue-500' : 'border-transparent'} transition-colors duration-200`}
    >
      {name}
    </div>
  )
}

export default GenreListItem