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
      console.log(`Genre list in mainform: ${genreList}`)
    })
  }, [])
  
  return (
    <PageContainer>
      <h1>
        What should I watch?
      </h1>
      
      <div>
        
        <GenreListView
          genres={genreList}
        />
        <AddMoviesGrid
          movieList={movieList}
        />
        
      </div>
      
    </PageContainer>
  )
}

export default MainForm