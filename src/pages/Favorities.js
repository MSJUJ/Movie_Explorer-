import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.length ? <MovieList movies={favorites} /> : <p>No favorites yet.</p>}
    </div>
  );
};

export default Favorites;
