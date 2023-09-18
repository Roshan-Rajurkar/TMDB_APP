import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const getSearchValue = (value) => {
    setSearch(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      let url;

      url = search.trim() === ''
        ? `https://api.themoviedb.org/3/movie/popular?api_key=b491b6971427cadd07342352b6955ea4&page=1`
        : `https://api.themoviedb.org/3/search/movie?api_key=b491b6971427cadd07342352b6955ea4&query=${search}&page=1`

      try {
        const response = await axios.get(url);
        setMovies(response && response.data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const getDataTimeout = setTimeout(fetchData, 2000);

    return () => clearTimeout(getDataTimeout);
  }, [search]);

  return (
    <div className="App">
      <SearchBar SelectedSearch={getSearchValue} />
      <Routes>
        <Route path="/" exact element={<MovieList allMovies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<p>No page Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
