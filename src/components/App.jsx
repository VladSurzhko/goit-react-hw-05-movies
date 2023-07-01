import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react'; 
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';



const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MoviesDetails/MovieDetails'));
// const Reviews = lazy(() => import('./Reviews/Reviews')) ;
// const Cast = lazy(() => import('./Cast/Cast'));



export const App = () => {
  return (
  <div>
  <Routes>
    
   <Route path="/" element={<Layout/>} >
     <Route index element={<Home/>} />
     <Route path="movie" element={<Movies />} />
     <Route path="movies/:movieId" element={<MovieDetails />}>
       <Route path='cast' element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
     </Route>
   </Route>
  </Routes>
  </div>
  )
};