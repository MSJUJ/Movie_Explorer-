import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;
