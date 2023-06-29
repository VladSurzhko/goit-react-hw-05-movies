

import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { FormSearch, InputSearch, LabelSearch } from './Movies.styled';
import { MoviesText } from '../Home/Home.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieName = searchMovie.get('movieName') ?? '';
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("")


  useEffect(() => {

        const fetchMovie = async () => {
          const movieName = searchMovie.get('movieName') ?? '';
          
          try {
            setIsLoading(true);
            const data = await getMovie(movieName);
            setMovies(data.results);
            if (data.results.length === 0) {
              setError(`Movie '${movieName}' not found`);
            } else {
              setError(null);
            }
            setIsInputEmpty(movieName === "")
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        };

        fetchMovie();
        }, [searchMovie]);
    
      //   if (!isInputEmpty) {
      //     fetchMovie();
      //   }
      // }, [isInputEmpty, movieName]);

      

  const handleSearch = evt => {
    const movieNameValue = evt.target.value;
    if (movieNameValue === '') {
      return setSearchMovie({});
    }
    setSearchMovie({ movieName: movieNameValue });
    setIsInputEmpty(false);
  };

  useEffect(() => {
    const movieName = searchMovie.get('movieName') ?? '';
    setSearchInputValue(movieName);
  }, [searchMovie]);

  // const handleSearch = evt => {
  //       setSearchInputValue(evt.target.value);
  //     };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchInputValue === '') {
      setIsInputEmpty(true);
      setSearchMovie({});
    } else {
      setIsInputEmpty(false);
      setSearchMovie({ movieName: searchInputValue });
    }
  };

  return (
    <>
      {!isInputEmpty && error && (
       <p>Movie {movieName} not found</p>
      )}

      {isLoading && <Loader />}
      <FormSearch onSubmit={handleSubmit}>
      <LabelSearch>Movie search</LabelSearch>
        <InputSearch 
        type="text" 
        value={movieName}
        onChange={handleSearch} />
        
      </FormSearch>

      {/* <SearchButton type="submit">Search</SearchButton> */}

      {movies.map(movie => (
        <MoviesText key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{}}>
            {movie.title}
          </Link>
        </MoviesText>
      ))}
    </>
  );
};

export default Movies;





