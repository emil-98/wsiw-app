import 'dotenv/config';
import db from './db.js';
import express from "express";
import axios from "axios";
import cors from 'cors';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';

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

const PgSession = connectPgSimple(session)

const sessionOptions = {
  store: new PgSession({
    pool: db,
    tableName: 'sessions',
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}

app.use(cors(corsOptions))
app.use(session(sessionOptions))

const baseConfig = {
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${tmdbReadAccess}`
  }
}

const discoverMovieURL = 'https://api.themoviedb.org/3/discover/movie'
const genreListURL = 'https://api.themoviedb.org/3/genre/movie/list'

app.get('/', (req, res) => {
  res.json({message: "Hello"})
})

app.get('/api/login', async (req, res) => {
  console.log("login route hit")
  try{
    const result = await db.query('SELECT id, email FROM logins WHERE email=$1 AND password=crypt($2, password);', [decodeURIComponent(req.query.email), decodeURIComponent(req.query.password)]);
    req.session.user = {
      id: result.rows[0].id,
      email: result.rows[0].email
    }
    res.send(result.rows);
  }catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.get('/api/profile', async (req, res) => {
  try{

  }catch (err){
    
  }
})

app.post('/api/signup', async (req, res) => {
  try{
    const result = await db.query('INSERT INTO logins (email, password) VALUES ($1, crypt($2, gen_salt(\'bf\')))', [decodeURIComponent(req.query.email), decodeURIComponent(req.query.password)]);
    res.json(result.rows);
  }catch (err){
    if(err.code == '23505'){
      // 409 Conflict is duplicate registration HTTP code
      res.status(409).send("Duplicate registration error");
    }else{
      res.status(500).send("Internal server error");
    }
  }
})

app.get('/api/genres', async (req, res) => {

  const tmdbRes = await axios.get(genreListURL, baseConfig).catch(err => console.log(err))

  res.send(tmdbRes.data?.genres)

});

app.get('/api/movies', async (req, res) => {

  // need to use query to access params from request
  const reqParams = req.query.genres

  const tmdbRes = await axios.get(`${discoverMovieURL}?with_genres=${reqParams}`, baseConfig).catch(err => console.log(err))

  res.send(tmdbRes.data?.results)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})