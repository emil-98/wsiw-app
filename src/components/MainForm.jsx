import React, { useEffect, useState } from 'react'
import PageContainer from './containers/PageContainer'
import MovieListView from './containers/MovieListView'
import axios from 'axios'
import GenreListView from './containers/GenreListView'


const MainForm = () => {

  const [genreList, setGenreList] = useState(null)
  const [movieList, setMovieList] = useState(null)

  // fetch list of genres from backend on page load
  useEffect(() => {

    const config = {
      headers: {
        "accepts": "application/json"
      }
    }

    axios.get("/api/genres", config)
    .then((res) => {
      setGenreList(res.data)
      console.log('fetched genres')
    })
  }, [])

  const getMovieList = async (genreString) => {

    console.log(genreString)
    const config = {
      params: {
        genres: `${genreString}`
      },
      headers: {
        "accepts": "Array"
      }
      
    }

    await axios.get("/api/movies", config)
    .then((res) => {
      setMovieList(res.data)
      console.log(res.data)
    })
  }

  // moved here from genrelistview so that I can access the returned data in this component
  const submitHandler = (stateArray, genreArray, searchAll) => {
    var finalGenreList = []
    
    for(let i = 0; i < stateArray.length; i ++){
      // check if stateArray index is true, if so, push genre id at that index into finalGenreList
      if(stateArray[i]){
        finalGenreList.push(genreArray[i].id)
      }
    }
    if(searchAll){
      // .join() defaults to comma delimiter
      getMovieList(finalGenreList.join())
    }else{
      getMovieList(finalGenreList.join('|'))
    }
    
  }
  
  return (
    <PageContainer>
      <h1 className='flex w-fit h-fit sticky text-transparent font-bold bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500'>
        What Should I Watch?
      </h1>
      
      <div className='flex flex-col items-center'>
        { genreList ? <GenreListView genres={genreList} submitHandler={submitHandler}/> : <h1>Let's find out...</h1> }
        
        {movieList ? <MovieListView movieList={movieList}/> : <h1>Loading...</h1>}
        
      </div>
    </PageContainer>
  )
}

export default MainForm