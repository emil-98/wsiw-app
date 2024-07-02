import 'dotenv/config'
import express, { application } from "express";
import axios from "axios";
import cors from 'cors'

const app = express()
const port = process.env.SERVER_PORT
const tmdbReadAccess = process.env.TMDB_READ_ACCESS
const tmdbAPIKey = process.env.TMDB_API_KEY


// all this cors stuff is essential for connecting to backend from vite frontend
const allowedOrigins = [
  "http://localhost:5173",
]

const corsOptions = {
  origin: allowedOrigins
}

app.use(cors(corsOptions))

const baseConfig = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbReadAccess}`
  }
}

const discoverMovieURL = 'https://api.themoviedb.org/3/discover/movie'
const genreListURL = 'https://api.themoviedb.org/3/genre/movie/list'

app.get('/', (req, res) => {
  res.json({message: "Hello"})
})

app.get('/api/genres', async (req, res) => {

  const tmdbRes = await axios.get(genreListURL, baseConfig).catch(err => console.log(err))

  res.send(tmdbRes.data?.genres)

})

app.get('/api/movies', async (req, res) => {

  // need to use query to access params from request
  const reqParams = req.query.genres

  const tmdbRes = await axios.get(`${discoverMovieURL}?with_genres=${reqParams}`, baseConfig).catch(err => console.log(err)).catch(err => console.log(err))

  const serverRes = tmdbRes.data?.results

  res.send(serverRes)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})