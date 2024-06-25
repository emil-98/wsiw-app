import React, { useEffect, useState } from 'react'
import PageContainer from './PageContainer'
import AddMoviesGrid from './AddMoviesGrid'
import axios from 'axios'
import GenreListView from './GenreListView'


const MainForm = () => {

  const [genreList, setGenreList] = useState(null)
  const [movieList, setMovieList] = useState(null)

  const genreReqConfig = {
    headers: {
      "accepts": "application/json"
    }
  }

  useEffect(() => {
    axios.get("/api/genres", genreReqConfig)
    .then((res) => {
      setGenreList(res.data)
    })
  }, [])
  
  return (
    <PageContainer>
      <h1 className='flex w-fit'>
        What should I watch?
      </h1>
      
      <div>
        { genreList ? <GenreListView genres={genreList}/> : <h1>Loading...</h1>}
        
        <AddMoviesGrid
          movieList={movieList}
        />
        
      </div>
      
    </PageContainer>
  )
}

export default MainForm