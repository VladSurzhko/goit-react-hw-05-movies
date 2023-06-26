import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Layout } from './Layout/Layout';
import Movies from './Pages/Movies/Movies';
import MovieDetails from './Pages/Movies/MovieDetails/MovieDetails';
import { Cast } from "./Cast/Cast"
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
  <div>
  <Routes>
    
   <Route path="/" element={<Layout/>} >
     <Route index element={<Home/>} />
     <Route path="movies" element={<Movies />} />
     <Route path="movies/:movieId" element={<MovieDetails />}>
       <Route path='cast' element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
     </Route>
   </Route>
  </Routes>
  </div>
  )
};