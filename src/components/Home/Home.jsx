import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { getMovies } from "../Api/Api"

const Home = () => {

const [listMovies, setListMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
    const fetchListMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();
        const listMovies = data.results;

        setListMovies(listMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMovies();
  }, []);

  return (
    <div>
        {error && <p>Sorry, something went wrong</p>}
        {/* {isLoading && <Loader />} */}
      <h1>Trending Movies</h1>
      {listMovies.map(movie => (
        <div key={movie.id}>
          <h3 to={`movies/${movie.id}`} state={{}}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
