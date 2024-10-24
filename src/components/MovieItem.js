// MovieItem.js
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
    <Link to={`/movie/${movie.id}`}>View Details</Link>
  </div>
);

export default MovieItem;
