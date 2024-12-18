import React from 'react';

const RemoveFavourite = () => {
  return (
    <>
      <span className="mr-2">Remove Favourites</span>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-x-circle-fill"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.854a.5.5 0 0 0-.708 0L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146a.5.5 0 0 0 0-.708z"
        />
      </svg>
    </>
  );
};

export default RemoveFavourite;
