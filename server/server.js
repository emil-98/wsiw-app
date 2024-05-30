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

const discoverMovieURL = `https://api.themoviedb.org/3/discover/movie?with_genres`
const genreListURL = 'https://api.themoviedb.org/3/genre/movie/list'

app.get('/', (req, res) => {
  res.json({message: "Hello"})
})

app.get('/api/findmovies', (req, res) => {
  
})

app.get('/api/genres', async (req, res) => {

  const config = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbReadAccess}`
    }
  }

  const extResponse = await axios.get(genreListURL, config).catch(err => console.log(err))

  res.send(extResponse.data?.genres)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})