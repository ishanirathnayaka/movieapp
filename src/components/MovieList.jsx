import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <div
            className="overlay"
            onClick={() => handleFavouritesClick(movie)}
          >
            <span>Add to Favourites ❤️</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;

