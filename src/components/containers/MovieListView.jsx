import React, { useState, Fragment } from 'react'
import MovieListItem from '../items/MovieListItem'
import MovieGridContainer from './MovieGridContainer'

const MovieListView = ({movieList}) => {

  const[selectedMovies, setSelectedMovies] = useState(null)
  // console.log("MovieListView: " + movieList[0].poster_path)

  return (
    <div className='flex flex-col w-fit h-fit'>
      <h2 className='flex w-full h-fit pb-2 justify-center text-transparent font-bold bg-clip-text bg-gradient-to-tr from-green-400 to-teal-400'>Seen any of these?</h2>
      <MovieGridContainer>
        {movieList?.map((movie) => {
          return(
            <Fragment key={movie.id}>
              <MovieListItem
                posterPath={movie.poster_path}
                title={movie.title}
                year={movie.release_date.substring(0, 4)}
                rating={movie.vote_average}
                summary={movie.overview}
              />
            </Fragment>
          )
        })}
      </MovieGridContainer>
    </div>
  )
}

export default MovieListView