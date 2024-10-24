import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('popular'); // Fetch popular movies initially
  }, []);

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
