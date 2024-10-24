// MovieList.js
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
