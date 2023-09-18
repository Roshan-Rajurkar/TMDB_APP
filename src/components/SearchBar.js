import React from 'react';
import './SearchBarStyle.css';
import { BsSearch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

function SearchBar({ SelectedSearch }) {
    const location = useLocation();

    if (location.pathname !== '/') {
        return null;
    }

    return (
        <div className='search-box'>
            <div className='search-icon'>
                <BsSearch />
            </div>
            <input
                type='text'
                name='search'
                id='search'
                className='search-input'
                placeholder='Search for a movie'
                onChange={(e) => SelectedSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
