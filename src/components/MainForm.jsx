import React, { useEffect, useState } from 'react'
import MainFormContainer from './containers/MainFormContainer'
import MovieListView from './containers/MovieListView'
import axios from 'axios'
import GenreListView from './containers/GenreListView'
import LoginBox from './containers/LoginBox'
import PageContainer from './containers/PageContainer'


const MainForm = () => {

  const [genreList, setGenreList] = useState(null)
  const [movieList, setMovieList] = useState(null)

  // fetch list of genres from backend on page load
  useEffect(() => {

    const config = {
      headers: {
        "Accept": "application/json"
      }
    }

    axios.get("/api/genres", config)
    .then((res) => {
      setGenreList(res.data)
    })
  }, [])

  const getMovieList = async (genreString) => {

    console.log(genreString)
    const config = {
      params: {
        genres: `${genreString}`
      },
      headers: {
        "Accept": "Array"
      }
      
    }

    await axios.get("/api/movies", config)
    .then((res) => {
      setMovieList(res.data)
      console.log(res.data)
    })
  }

  // moved here from genrelistview so that I can access the returned data in this component
  const submitGenresHandler = (stateArray, genreArray, searchAll) => {
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

  const loginSignupHandler = async (emailStr, passwordStr, formType) => {
    let encodedEmail = encodeURIComponent(emailStr)
    let encodedPassword = encodeURIComponent(passwordStr)
    
    const config = {
      params: {
        email: encodedEmail,
        password: encodedPassword
      },
      headers: {
        "Accept": "application/json"
      }
    }

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailStr) && passwordStr.length > 7){
      if(formType === 2){
        await axios.get('/api/login', config).then((res) => {
          console.log("Login response status: ", res.status);
          console.log("Found user: ", res.data[0].email);
        })
      }else{
        await axios.post("/api/signup", config).then((res) => {
          console.log("Signup response status: ", res.status);
        })
      }
    }else{
      console.log("Invalid email format")
    }
  }

  return (
    <PageContainer>
      <LoginBox
        submitHandler={loginSignupHandler}
      />
      <MainFormContainer>
      
        <h1 className='flex w-full justify-center h-fit sticky text-transparent font-bold bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500'>
          What Should I Watch?
        </h1>

        <div className='flex flex-col items-center'>
          { genreList ? <GenreListView genres={genreList} submitHandler={submitGenresHandler}/> : <></> }
          
          {movieList ? <MovieListView movieList={movieList}/> : <></>}
          
        </div>
      </MainFormContainer>
    </PageContainer>
    
  )
}

export default MainForm