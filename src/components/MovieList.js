import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieCardStyle.css';

const MovieList = ({ allMovies }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (allMovies.length > 0) {
            setIsLoading(false);
        }
    }, [allMovies]);

    return (
        <div className='movie__list'>
            {isLoading ? (
                <p>Loading...</p>
            ) : allMovies && allMovies.length > 0 ? (
                allMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            ) : (
                <p>Not Found</p>
            )}
        </div>
    );
};

export default MovieList;
