import React, { useState } from 'react'
import GenreListItem from './GenreListItem'

const GenreListView = ({genres}) => {

  const initSelections = Array(genres?.length).fill(false)

  const [selectedGenres, setSelectedGenres] = useState(initSelections)

  const itemClickHandler = (itemNum) => {
    const nextSelectedGenres = selectedGenres.map((item, index) => {
      if(index === itemNum){
        return !item
      }else{
        return item
      }
    })
    setSelectedGenres(nextSelectedGenres)
  }

  return (
    <div className='flex w-fit h-fit'>
      <ul className='flex flex-wrap max-w-[500px] justify-center'>
        {genres && genres.map((genre, index) => {
          return(
            <li key={index} className='flex w-fit h-fit p-[0.6vw]'>
              <GenreListItem
                name={genre.name}
                id={genre.id}
                isSelected={selectedGenres[index]}
                handleClick={() => itemClickHandler(index)}
              />
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GenreListView