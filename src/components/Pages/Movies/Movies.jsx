

import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { FormSearch, InputSearch, LabelSearch, SearchButton } from './Movies.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieName = searchMovie.get('movieName') ?? '';
  const [isInputEmpty, setIsInputEmpty] = useState(true);


  useEffect(() => {
        const fetchMovie = async () => {
          try {
            setIsLoading(true);
            const data = await getMovie(movieName);
            setMovies(data.results);
            if (data.results.length === 0) {
              setError(`Movie '${movieName}' not found`);
            } else {
              setError(null);
            }
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        };
    
        if (!isInputEmpty) {
          fetchMovie();
        }
      }, [isInputEmpty, movieName]);

  const handleSearch = evt => {
    const movieNameValue = evt.target.value;
    if (movieNameValue === '') {
      return setSearchMovie({});
    }
    setSearchMovie({ movieName: movieNameValue });
    setIsInputEmpty(false);
  };

  return (
    <>
      {!isInputEmpty && error && (
       <p>Movie {movieName} not found</p>
      )}

      {isLoading && <Loader />}
      <FormSearch>
      <LabelSearch>Movie search</LabelSearch>
        <InputSearch 
        type="text" 
        value={movieName}
        onChange={handleSearch} />
        
      </FormSearch>

      <SearchButton type="submit">Search</SearchButton>

      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{}}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Movies;





