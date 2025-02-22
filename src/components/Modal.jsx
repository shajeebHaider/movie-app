// Modal.js
import React from 'react';

export const Modal = ({
  movie: {
    backdrop_path,
    genre_ids,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
    id
  },
  onClose
}) => {
  const handleContentClick = e => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto "
        onClick={handleContentClick}
      >
        <div className="w-2 bg-gray-800"></div>
        <div
          className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
          data-movie-id={id}
        >
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
            <div className="poster__info align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  <a className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                      Trailer
                    </div>
                  </a>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity">{popularity}</div>
                    <div className="text-sm text-gray-400">Popularity:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">{release_date ? release_date : 'N/A'}</div>
                    <div className="text-sm text-gray-400">Release date:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">155 min</div>
                    <div className="text-sm text-gray-400">Runtime:</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="text-xs text-gray-400 mb-2">Overview:</div>
                  <p className="text-xs text-gray-100 mb-6">{overview}</p>
                </div>
              </div>
              <div
                data-countdown="2021-09-15"
                className="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
              ></div>
            </div>
          </div>
          <img
            className="absolute inset-0 transform w-full -translate-y-4"
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
            alt={title}
            style={{ filter: 'grayscale(0)' }}
          />
          <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
            <button
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
