import React, { useState } from 'react'
import MovieGridItem from './MovieGridItem'
import axios from 'axios'

const AddMoviesGrid = ({movieList}) => {

  return (
    <div className='grid grid-cols-6 w-full'>
      {movieList?.map((movie) => {
        <MovieGridItem
          title={movie.title}
          posterPath={movie.poster_path}
        />
      })}
    </div>
  )
}

export default AddMoviesGrid