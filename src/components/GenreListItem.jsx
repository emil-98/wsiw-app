import React, { useState } from 'react'

const GenreListItem = ({name, id}) => {

  const [selected, setSelected] = useState(false)

  return (
    <div 
      className={`flex h-fit w-fit p-2 rounded-full bg-gray-500 border-2 ${selected ? 'border-blue-500' : 'border-transparent'} transition-colors duration-200`}
      onClick={() => setSelected(!selected)}
    >
      {name}
    </div>
  )
}

export default GenreListItem