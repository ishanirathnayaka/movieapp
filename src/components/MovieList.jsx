import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent: FavouriteComponent }) => {
  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3" key={index}>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'path/to/fallback-image.jpg'}
              alt={movie.Title}
            />
            <div
              onClick={() => handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <p>No movies to display.</p>
      )}
    </>
  );
};

export default MovieList;


