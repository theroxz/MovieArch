import React, {useEffect} from "react";
import MovieList from '../MovieList';
import SearchBar from '../SearchBar';
import './style.css';
import axios from 'axios';
import MovieAdder from '../MovieAdder';
import MovieEditor from '../MovieEditor';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useDispatch } from 'react-redux';
import { setMovies} from '../../features/movieSlice';

const App = () => {
    const dispatch = useDispatch();
    async function onMount(){
        const url = "http://localhost:3002/movies";
        const response = await axios.get(url);
        dispatch(setMovies(response.data));
    }
    useEffect(()=>{
      onMount();
    },[]);
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            (<React.Fragment>
              <SearchBar/>
              <MovieList/>
            </React.Fragment>)}>
          </Route>
          <Route path="/add-movie" element={<MovieAdder/>}></Route>
          <Route path="/edit/:id" element={<MovieEditor/>}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
