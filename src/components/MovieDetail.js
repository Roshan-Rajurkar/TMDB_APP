import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetailStyle.css';

const MovieDetail = () => {
    const location = useLocation();
    const movie = location.state;

    return (
        <div className='movie-detail-container'>
            <div className="movie-image">
                <img
                    className='movie-product-image'
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=170667a&w=0&k=20&c=IyNlM1yfvw2UAitPPF7hIBBsr4IZjZJUDS1C5YgmiwA='}
                    alt={movie.title}
                />
            </div>
            <div className="movie-info">
                <h2 className='movie-title'>{movie.title}</h2>
                <p className='movie-vote'>Votes: {movie.vote_count}</p>
                <strong className='movie-release'>Release Date: {movie.release_date}</strong>
                <p className="movie-overview">{movie.overview}</p>
                <p className="movie-pop">Popularity: {movie.popularity}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
