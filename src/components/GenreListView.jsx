import React, { useState } from 'react'
import GenreListItem from './GenreListItem'

const GenreListView = ({genres}) => {

  

  return (
    <div className='flex w-fit h-fit'>
      <ul className='grid grid-cols-4 w-fit h-fit gap-2'>
        {genres && genres.map((genre, index) => {
          return(
            <li key={index} className='flex w-fit h-fit'>
              <GenreListItem
                name={genre.name}
                id={genre.id}
              />
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GenreListView