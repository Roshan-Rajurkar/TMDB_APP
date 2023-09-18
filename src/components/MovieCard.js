import React from 'react';
import './MovieCardStyle.css'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    const navigate = useNavigate();

    const openMoviePage = () => {
        navigate(`/movie/${movie.id}`, { state: movie }); // Pass movie object directly
    };

    return (
        <div className="movie-card" onClick={openMoviePage}>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=170667a&w=0&k=20&c=IyNlM1yfvw2UAitPPF7hIBBsr4IZjZJUDS1C5YgmiwA='}
                alt={movie.title}
            />
            <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>
                    <strong>Release Date:</strong> {movie.release_date}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
