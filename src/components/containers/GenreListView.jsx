import React, { useState } from 'react'
import GenreListItem from '../items/GenreListItem'
import GenericButton from '../input/GenericButton'

const GenreListView = ({genres, submitHandler}) => {

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
    <div className='flex flex-col w-fit max-w-[500px] h-fit items-center content-center'>
      <ul className='flex flex-wrap justify-center'>
        {genres && genres.map((genre, index) => {
          return(
            <li key={index} className='flex w-fit h-fit'>
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
      <div className='flex self-center m-2 justify-center w-fit h-fit rounded-full bg-gradient-to-tr from-purple-500 to-blue-500'>
        <div className='flex m-[2px] rounded-full bg-gray-950'>
          <GenericButton
            label={"Search All"}
            clickEvent={() => submitHandler(selectedGenres, genres, true)}
          />
          <GenericButton
            label={"Search Any"}
            clickEvent={() => submitHandler(selectedGenres, genres, false)}
          />
        </div>
      </div>
    </div>
  )
}

export default GenreListView