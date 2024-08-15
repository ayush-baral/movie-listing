import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface MovieCardProps {
  poster: string;
  title: string;
  released: string;
  isInWatchlist: boolean;
  onAddToWatchlist: () => void;
  onRemoveFromWatchlist: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  poster,
  title,
  released,
  isInWatchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
}) => {
  return (
    <div className='border border-gray-300 bg-white  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative'>
      <img src={poster} alt={title} className='h-40 w-full object-cover mb-2' />
      <div className='p-4'>
        <h1 className='text-lg font-semibold text-gray-800 mb-1'>{title}</h1>
        <p className='text-sm text-gray-600'>{released}</p>
      </div>

      <button
        onClick={isInWatchlist ? onRemoveFromWatchlist : onAddToWatchlist}
        className={`absolute top-2 right-2 text-2xl ${
          isInWatchlist ? "text-red-500" : "text-gray-400"
        } hover:text-red-600 transition-colors duration-200`}
        aria-label={
          isInWatchlist ? "Remove from watchlist" : "Add to watchlist"
        }
      >
        {isInWatchlist ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default MovieCard;
