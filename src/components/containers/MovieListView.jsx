import React, { useEffect, useState } from 'react'
import MovieListItem from '../items/MovieListItem'
import MovieGridContainer from './MovieGridContainer'

const MovieListView = ({movieList}) => {

  const[selectedMovies, setSelectedMovies] = useState(null)
  // console.log("MovieListView: " + movieList[0].poster_path)

  return (
    <div className='flex flex-col w-fit h-fit'>
      <h2 className='flex w-fit h-fit sticky text-transparent font-bold bg-clip-text bg-gradient-to-tr from-accent-green-400 to-teal-400'>Seen any of these?</h2>
      <MovieGridContainer>
        {movieList?.map((movie) => {
          return(<MovieListItem
            posterPath={movie.poster_path}
            title={movie.title}
            year={movie.release_date.substring(0, 4)}
            rating={movie.vote_average}
          />)
        })}
      </MovieGridContainer>
    </div>
  )
}

export default MovieListView