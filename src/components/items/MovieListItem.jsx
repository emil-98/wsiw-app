import React from 'react'
import RatingScale from './RatingScale'

const MovieListItem = ({posterPath, title, year, rating, numVotes, summary}) => {
  const posterURL = `https://image.tmdb.org/t/p/w154${posterPath}`
  return (
    <div className='flex group w-fit h-fit z-0'>
      <div style={{'--img-url': `url(${posterURL})`}}
         className='flex bg-[image:var(--img-url)] bg-no-repeat bg-cover bg-center rounded-xl w-[154px] h-[231px] blur-0 group-hover:blur-lg transition-all duration-200 z-10'>
      
      </div>
      <div style={{'--img-url': `url(${posterURL})`}}
          className='flex absolute bg-[image:var(--img-url)] bg-no-repeat bg-cover bg-center rounded-xl w-[154px] h-[231px] z-20 overflow-hidden'>
        <div className='flex flex-col h-full w-full p-4 bg-gray-950 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-200'>
          
          <h3 className='flex w-fit h-fit text-xl text-opacity-0 font-bold group-hover:text-opacity-100 transition-all duration-200'>
            {title}
          </h3>
          <p className='flex w-fit h-fit px-[4px] rounded-full bg-opacity-0 group-hover:bg-opacity-25 bg-gray-500 text-gray-300 text-xs text-opacity-0 group-hover:text-opacity-100 transition-all duration-200'>
            {year}
          </p>
          <RatingScale
            score={rating}
            numVotes={numVotes}
          />
        </div>
      </div>
    </div>
    
    
  )
}

export default MovieListItem